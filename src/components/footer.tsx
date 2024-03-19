import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, HStack, IconButton, Image, Text, useDisclosure, VStack } from "@chakra-ui/react";
import i18n from "@i18n";
import { useWindowSize } from "react-use";

const ShoppingCart = ({ show = true, item }: {
  show?: boolean;
  item?: ORDER_INFO[];
}) => {
  const { width, height } = useWindowSize();
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    show &&
    <Box display="flex" justifyContent={item?.length ? "space-between" : ""} alignItems="center" zIndex={1401}
      width="100%" bg="#353535" position="fixed" bottom={0} height="3rem" >
      <Button borderRadius="0" height="100%" bg="#252525" position="relative" mr=".5rem"
        onClick={() => item ? onToggle() : ''}>
        {item?.length && <Badge display="flex" justifyContent="center" alignItems="center" borderRadius="50rem" bg="red.500" position="absolute" top="-8px" right="-8px" w="22px" h="22px">
          <Text fontSize="md" color="white">{item?.length}</Text>
        </Badge>}
        <i className="fa-solid fa-cart-shopping"></i>
      </Button>
      {item?.length
        ? <>
          <Heading size="lg" noOfLines={1} color="white">$999</Heading>
          <Button borderRadius="0" height="100%" bg="teal.500" color="white"
            px="2rem">{i18n.t('placeOrder')}</Button>
        </>
        : <Text color="gray.500">{i18n.t('noProductsSelected')}</Text>}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" borderTopRadius="1rem" mb="3rem">
          <DrawerHeader py=".2rem" borderBottom=".5px solid #e3e3e3">
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="sm">{i18n.t('selected')} {item?.length} {i18n.t('items')}</Text>
              <Button size="sm" variant='ghost' color="gray.600" leftIcon={<DeleteIcon />}
                iconSpacing="2px">{i18n.t('clear')}</Button>
            </Box>
          </DrawerHeader>
          <DrawerBody maxH={width > height ? "14rem" : "24rem"} minH={width > height ? "14rem" : "24rem"}>
            {item?.map((item: ORDER_INFO) => (
              <Box key={item.id} display="flex" justifyContent="space-between" borderBottom=".5px solid #e3e3e3"
                py=".5rem">
                <HStack spacing={5}>
                  <Image src={`https://picsum.photos/150/150?random=${item.id}`} width="4rem" height="4rem" />
                  <VStack spacing={0} alignItems="start">
                    <Text as="b" fontSize="md">{item.name}</Text>
                    <Text fontSize="xs" color="blackAlpha.500">{item.record}</Text>
                    <Text as="b" fontSize="s" color="green.500">${item.amount}</Text>
                  </VStack>
                </HStack>
                <HStack spacing={5}>
                  <IconButton icon={<MinusIcon />} isRound variant="solid" aria-label="sub"
                    fontSize=".6rem" size="xs" border="1px solid" color="teal.500" />
                  <Text as="b">{'1'}</Text>
                  <IconButton icon={<AddIcon />} isRound variant="solid" colorScheme="teal" aria-label="add"
                    fontSize=".6rem" size="xs" color="white" />
                </HStack>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box >
  );
};

export default ShoppingCart;