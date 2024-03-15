import { DeleteIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Text, useDisclosure } from "@chakra-ui/react";
import i18n from "@i18n";

const ShoppingCart = ({ show = true, item }: {
  show?: boolean;
  item?: number;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    show &&
    <Box display="flex" justifyContent={item ? "space-between" : ""} alignItems="center"
      minWidth="100vw" bg="#353535" position="fixed" bottom={0} height="3rem">
      <Button borderRadius="0" height="100%" bg="#252525" position="relative" mr=".5rem"
        onClick={() => item ? onOpen() : ""}>
        {item && <Badge borderRadius="20%" bg="red.500" position="absolute"
          top="-8px" right="-8px">
          <Text fontSize="xs" color="white">{item}</Text>
        </Badge>}
        <i className="fa-solid fa-cart-shopping"></i>
      </Button>
      {
        item
          ? <>
            <Heading size="lg" noOfLines={1} color="white">$999</Heading>
            <Button borderRadius="0" height="100%" bg="teal.500" color="white"
              px="2rem">{i18n.t('placeOrder')}</Button>
          </>
          : <Text color="gray.500">{i18n.t('noProductsSelected')}</Text>
      }
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" borderTopRadius="1rem" mb="3rem">
          <DrawerHeader py=".2rem" borderBottom=".5px solid #e3e3e3">
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Text color="gray.600" fontSize="xs">{i18n.t('selected')} {item} {i18n.t('items')}</Text>
              <Button size="xs" variant='ghost' color="gray.600" leftIcon={<DeleteIcon />}
                  iconSpacing="2px">{i18n.t('clear')}</Button>
            </Box>
          </DrawerHeader>
          <DrawerBody minHeight="10rem">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ShoppingCart;