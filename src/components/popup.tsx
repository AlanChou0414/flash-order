import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Tag, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { LayoutRadio } from "./layout";

export const OrderConfirmPopup = ({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [activeSugar, setActiveSugar] = useState<string>('1');
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay bg="blackAlpha.500" backdropFilter="blur(1.5px)" />
      <DrawerContent bg="whiteAlpha.900" borderTopRadius="30px">
        <DrawerCloseButton borderRadius="100%" bg="white" />
        <DrawerHeader borderBottom="1px solid #e3e3e3" p="6rem" bgImage="https://picsum.photos/500/300" bgSize="cover" bgRepeat="no-repeat" borderTopRadius="30px">
        </DrawerHeader>
        <DrawerBody overflowY="auto" pt="0">
          <Box position="relative">
            <VStack spacing={.1} alignItems="start">
              <Text as="b" fontSize="2xl">{'經典珍珠奶茶'}</Text>
              <Text as="b" fontSize="lg" color="green.500">${'80'}</Text>
              <Text fontSize="sm" color="gray.500">
                {'Q彈珍珠加上重發酵紅茶，搭配出特殊的香甜口感，完美結合，味道厚實濃郁。'}
              </Text>
            </VStack>
            <Divider colorScheme="gary" border="1px solid #e3e3e3" my="1rem" />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text as="b" fontSize="lg">{'甜度'}</Text>
              <Tag size="sm" colorScheme="gary">{'必填'}</Tag>
            </Box>
            <LayoutRadio options={[
              { id: '1', content: '無糖' },
              { id: '2', content: '一分糖' },
              { id: '3', content: '三分糖' },
              { id: '4', content: '半糖' },
              { id: '5', content: '少糖' },
              { id: '6', content: '全糖' },
            ]} active={activeSugar} setActive={setActiveSugar} />
          </Box>
        </DrawerBody>
      </DrawerContent >
    </Drawer >
  );
};