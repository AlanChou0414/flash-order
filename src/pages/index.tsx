import { Box, HStack, Image, Select, Text, VStack, useBoolean } from "@chakra-ui/react";
import { Layout, LayoutButton } from "@components/layout";
import { PATH } from "@constants/path";
import i18n from "@i18n";
import { useNavigate } from "react-router-dom";

/* Center */
const PageMain = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useBoolean();

  return (
    <Layout title={i18n.t('system')} showFooter={false} langTextColor={"white"}>
      <Box backgroundImage="url('/images/food.jpg')" backgroundSize="cover">
        <Box bg="#00000050">
          <VStack minHeight="100vh" justifyContent="center" py="5rem">
            <Image src="https://fakeimg.pl/100x100/E3E3E3" borderRadius="1rem" />
            <Box>
              <HStack spacing={1}>
                <Text fontSize="2xl" as="b" color="yellow.400">Flash</Text>
                <Text fontSize="2xl" as="b" color="white">Order</Text>
              </HStack>
            </Box>
            <Box>
              <VStack spacing={5} mt="1rem" borderRadius="1rem" bg="white" p="2rem">
                <HStack spacing={3}>
                  <LayoutButton active={mode} icon={<i className="fa-solid fa-bag-shopping"></i>}
                    text={i18n.t('takeOut')} onClick={setMode.on} />
                  <LayoutButton active={!mode} icon={<i className="fa-solid fa-utensils"></i>}
                    text={i18n.t('stayIn')} onClick={setMode.off} />
                </HStack>
                <VStack spacing={3}>
                  {
                    mode
                      ? <></>
                      :
                      <>
                        <Text as="b" fontSize="sm">{i18n.t('pleaseSelectTheNumberOfDiners')}</Text>
                        <Select mb="1rem" textAlign="center" size="sm" variant='flushed' borderColor="teal.500"
                          iconColor="teal.500">
                          {Array.from({ length: 10 }).map((item, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                          ))}
                        </Select>
                      </>
                  }
                </VStack>
                <LayoutButton props={{ px: '5rem', py: '1.2rem', size: "md" }} active
                  text={i18n.t('startOrdering')} onClick={() => navigate(PATH.ORDERING)} />
              </VStack>
            </Box>
          </VStack >
        </Box>
      </Box>
    </Layout>
  );
};

export default PageMain;