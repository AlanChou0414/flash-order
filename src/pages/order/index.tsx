import { ChevronRightIcon } from "@chakra-ui/icons";
import { AbsoluteCenter, Box, Divider, HStack, IconButton, Image, Tag, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Layout } from "@components/layout";
import { OrderConfirmPopup } from "@components/popup";
import { useStore } from "@hooks/store.hook";
import i18n from "@i18n";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useScrolling, useWindowSize } from "react-use";

/* Order Index */
const PageMain = () => {
  const store = useStore();
  const scrollRef = useRef(null);
  const scrolling = useScrolling(scrollRef);
  const { height } = useWindowSize();
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeInfo, setActiveInfo] = useState<ORDER_DETAIL>({
    id: 0, name: '', amount: 0, photo: ''
  });
  const [record, setRecord] = useState<ORDER_RECORD[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/order.json');
        setData(response.data.data);
      } catch (error) { return; }
    };
    fetchData();
  }, []);
  const handleOpenPopup = (info: ORDER_DETAIL) => {
    onOpen();
    setActiveInfo(info);
  };
  return (
    <Layout title={i18n.t('ordering')} mode={store.mode?.stayInd} guest={store.mode?.guest}
      shoppingItems={record} tabItems={data} scrolling={scrolling} isOpenConfirmPopup={isOpen}>
      <VStack ref={scrollRef} spacing={10} alignItems="start" p="2rem" h={height - 150}
        overflowY="auto" scrollBehavior="smooth">
        {data?.map((item: ORDER_INFO) => (
          <Box key={item.id} w="100%">
            <Box position="relative">
              <Divider colorScheme="gary" border="1px solid #e3e3e3" />
              <AbsoluteCenter>
                <Tag id={`${item.id}`} size="md" variant='solid' colorScheme='gary'>{item.label}</Tag>
              </AbsoluteCenter>
            </Box>
            {item?.detail.map((item: ORDER_DETAIL) => (
              <HStack key={item.id} spacing={4} position="relative" py=".8rem"
                onClick={() => handleOpenPopup(item)}>
                <Image src={`https://picsum.photos/150/150?random=${item.id}`}
                  w="5rem" h="5rem" borderRadius="10px" />
                <VStack spacing={3} alignItems="start">
                  <Text as="b" fontSize="md">{item.name}</Text>
                  <Text as="b" fontSize="s" color="green.500">${item.amount}</Text>
                </VStack>
                <Box position="absolute" right={5} bottom={5}>
                  <IconButton icon={<ChevronRightIcon />} isRound variant='solid' bg="none"
                    aria-label='Done' fontSize='26px' size="sm" color="gary.600"
                    _active={{ color: 'gary.600', bg: 'none' }} _hover={{ color: 'gary.600', bg: 'none' }} />
                </Box>
              </HStack>
            ))}
          </Box>
        ))}
      </VStack>
      <OrderConfirmPopup isOpen={isOpen} onClose={onClose} activeInfo={activeInfo} record={record}
        setRecord={setRecord} />
    </Layout>
  );
};

export default PageMain;