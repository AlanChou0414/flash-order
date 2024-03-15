import { Box, HStack, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import { PATH } from "@constants/path";
import i18n from "@i18n";
import { animated, useSpring } from "@react-spring/web";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

/* Entry */
const PageMain = () => {
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const springsProps = useSpring({ from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } });
  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1] }), []);
  const handleMouseLeave = () => api.start({ xys: [0, 0, 1] });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = boxRef?.current?.getBoundingClientRect();
    if (rect) api.start({ xys: calc(e.clientX, e.clientY, rect) });
  };
  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
  ];
  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <Layout title={i18n.t('entry')} showFooter={false} langTextColor={"white"}>
      <VStack spacing={6} minHeight="100vh" justifyContent="center" bg="gray.900">
        <Box as={animated.div} style={springsProps}>
          <VStack spacing={.1}>
            <HStack spacing={1}>
              <Text fontSize="3xl" as="b" color="yellow.400">Flash</Text>
              <Text fontSize="3xl" as="b" color="white">Order</Text>
            </HStack>
            <Text fontSize="sm" color="white" letterSpacing="1px">
              {i18n.t('orderAndPayByPhone').toLocaleUpperCase()}
            </Text>
          </VStack>
        </Box>
        <Box ref={boxRef} as={animated.div} style={springsProps}>
          <animated.div style={{ transform: xys.to(trans) }} onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <QRCodeSVG value="https://google.com" level="H" bgColor="#171923" fgColor="white" />
          </animated.div>
        </Box>
        <Box as={animated.div} style={springsProps}>
          <VStack spacing={1} >
            <Text fontSize="xs" color="white">{i18n.t('pleaseScanTheQRCode')}</Text>
            <Tag fontSize="3xl" variant="solid" colorScheme="green" onClick={() => navigate(PATH.CENTER)}>
              <TagLabel>{i18n.t('entry')}</TagLabel>
            </Tag>
          </VStack>
        </Box>
      </VStack>
    </Layout>
  );
};

export default PageMain;