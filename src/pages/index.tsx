import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, HStack, Image, Select, Text, VStack, useBoolean } from "@chakra-ui/react";
import { LanguageSelect, LayoutButton } from "@components/layout";
import i18n from "@i18n";
import { Helmet } from "react-helmet";

/* Center */
const PageMain = () => {
  const [mode, setMode] = useBoolean();

  return (
    <>
      <Helmet><title>Flash Order</title></Helmet>
      <VStack height="100vh" justifyContent="center">
        <LanguageSelect />
        <Image src="https://fakeimg.pl/100x100/E3E3E3" borderRadius="10px" />
        <Box>
          <HStack spacing={1}>
            <Text fontSize="lg" as="b" color="yellow.400">Flash</Text>
            <Text fontSize="lg" as="b" color="text">Order</Text>
          </HStack>
        </Box>
        <Box>
          <VStack spacing={5} mt="20px" borderRadius="10px" bg="gray.200" p="20px">
            <HStack spacing={3}>
              <LayoutButton active={mode} icon={<ArrowForwardIcon />}
                text={i18n.t('takeOut')} onClick={setMode.on} />
              <LayoutButton active={!mode} icon={<ArrowForwardIcon />}
                text={i18n.t('stayIn')} onClick={setMode.off} />
            </HStack>
            {
              mode
                ? <>
                </>
                : <VStack spacing={3}>
                  <Text as="b" fontSize="sm">{i18n.t('pleaseSelectTheNumberOfDiners')}</Text>
                  <Select mb="20px" textAlign="center" size="sm" variant='flushed' borderColor="teal.500"
                    iconColor="teal.500">
                    {Array.from({ length: 10 }).map((item, index) => (
                      <option value={index + 1}>{index + 1}</option>
                    ))}
                  </Select>
                  <LayoutButton props={{ px: '80px', py: '20px', size: "md" }} active
                    text={i18n.t('startOrdering')} />
                </VStack>

            }
          </VStack>
        </Box>
      </VStack >
    </>
  );
};

export default PageMain;