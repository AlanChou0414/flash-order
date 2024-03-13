import { Center, HStack, Tag, TagLabel, Text, VStack } from "@chakra-ui/react";
import { animated, useSpring } from "@react-spring/web";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const PageMain = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const opacityProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1] }), [])
  const handleMouseLeave = () => api.start({ xys: [0, 0, 1] })
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = boxRef?.current?.getBoundingClientRect()
    if (rect) api.start({ xys: calc(e.clientX, e.clientY, rect) })
  }
  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
  ]
  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  return (
    <>
      <Helmet><title>Order Entry</title></Helmet>
      <VStack height="100vh" justifyContent="center" bg="gray.900">
        <Center mb="20px" as={animated.div} style={{ transition: '.3s', ...opacityProps }}>
          <HStack spacing={1}>
            <Text fontSize="3xl" as="b" color="yellow.400">Flash</Text>
            <Text fontSize="3xl" as="b" color="white">Order</Text>
            <Tag fontSize="3xl" variant="solid" colorScheme="green"><TagLabel>Entry</TagLabel></Tag>
          </HStack>
        </Center>
        <Center ref={boxRef} as={animated.div} style={{ transition: '.3s', ...opacityProps }}>
          <animated.div style={{ transform: xys.to(trans) }} onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}>
            <QRCodeCanvas value="https://google.com" level="H" bgColor="#171923" fgColor="white"/>
          </animated.div>
        </Center>
      </VStack>
    </>
  )
}

export default PageMain