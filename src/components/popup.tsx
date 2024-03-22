import { Box, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Image, Tag, Text, Textarea, VStack } from "@chakra-ui/react";
import i18n from "@i18n";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { LayoutRadio } from "./layout";

export const OrderConfirmPopup = ({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const popupRef = useRef(null);
  const { width, height } = useWindowSize();
  const [activeSugar, setActiveSugar] = useState<string>('1');
  const [activeIce, setActiveIce] = useState<string>('7');
  useEffect(() => {
    console.log(popupRef);
  }, []);
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} isFullHeight>
      <DrawerOverlay bg="blackAlpha.500" backdropFilter="blur(1.5px)" />
      <DrawerContent bg="whiteAlpha.900" borderTopRadius="30px">
        {/* {<DrawerHeader display="flex" justifyContent="center" alignItems="center"
          h="3rem" bg="white">
          <Text as="b" fontSize="2xl">{'經典珍珠奶茶'}</Text>
          <DrawerCloseButton borderRadius="100%" bg="gray.200" color="gray.600"/>
        </DrawerHeader>} */}
        <DrawerBody p="0" overflowX="hidden">
          <Box position="relative" pb="1rem">
            <DrawerCloseButton borderRadius="100%" bg="white" />
            <Image src="https://picsum.photos/500/300" bgSize="cover" bgRepeat="no-repeat"
              borderTopRadius="30px" w="100%" maxH={width > height ? "12rem" : "14rem"} />
            <VStack spacing={.1} alignItems="start" px="2rem" mt=".5rem">
              <Box w="100%" ref={popupRef}>
                <Text as="b" fontSize="2xl">{'經典珍珠奶茶'}</Text>
              </Box>
              <Text as="b" fontSize="lg" color="green.500">${'80'}</Text>
              <Text fontSize="sm" color="gray.500">
                {'Q彈珍珠加上重發酵紅茶，搭配出特殊的香甜口感，完美結合，味道厚實濃郁。'}
              </Text>
            </VStack>
            <Divider colorScheme="gray" border="1px solid #e3e3e3" my="1rem" />
            <Box display="flex" alignItems="center" justifyContent="space-between" px="2rem"
              mt="1rem">
              <Text as="b" fontSize="lg">{i18n.t('甜度')}</Text>
              <Tag size="sm" colorScheme="black">{i18n.t('必填')}</Tag>
            </Box>
            <LayoutRadio props={{ px: '2rem' }} options={[
              { id: '1', content: '無糖' },
              { id: '2', content: '一分糖' },
              { id: '3', content: '三分糖' },
              { id: '4', content: '半糖' },
              { id: '5', content: '少糖' },
              { id: '6', content: '全糖' },
            ]} active={activeSugar} setActive={setActiveSugar} />
            <Box display="flex" alignItems="center" justifyContent="space-between" px="2rem"
              mt="1rem">
              <Text as="b" fontSize="lg">{i18n.t('溫度')}</Text>
              <Tag size="sm" colorScheme="black">{i18n.t('必填')}</Tag>
            </Box>
            <LayoutRadio props={{ px: '2rem' }} options={[
              { id: '7', content: '正常' },
              { id: '8', content: '少冰' },
              { id: '9', content: '微冰' },
              { id: '10', content: '去冰' },
              { id: '11', content: '常溫' },
              { id: '12', content: '熱' },
            ]} active={activeIce} setActive={setActiveIce} />
            <Box display="flex" alignItems="center" justifyContent="space-between" px="2rem"
              my="1rem">
              <Text as="b" fontSize="lg">{i18n.t('備註')}</Text>
              <Tag size="sm" colorScheme="black">{i18n.t('選填')}</Tag>
            </Box>
            <Center>
              <Textarea w="100vw" mx="2rem" size="sm" resize="unset" p=".8rem"
                border=".5px solid #252525" colorScheme="black" borderRadius="10px" />
            </Center>
          </Box>
        </DrawerBody>
        <DrawerFooter bg="#252525" h="3rem" justifyContent="center" cursor="pointer">
          <Text as="b" fontSize="lg" color="gray.400">{i18n.t('加入購物車')}</Text>
        </DrawerFooter>
      </DrawerContent >
    </Drawer>
  );
};