import { Box, Center, HStack, Text } from "@chakra-ui/react";
import i18n from "@i18n";
import { LanguageSelect, LayoutTag } from "./layout";

export const StatusHeader = ({ show = true, mode, guest }: {
  show?: boolean;
  mode?: boolean;
  guest?: number;
}) => {

  return (
    show &&
    <Box display="flex" justifyContent="space-between" alignItems="center" px="1rem"
      w="100%" top={0} h="50px" borderBottom=".5px solid #e3e3e3"
      bg="white" zIndex={999}>
      {mode
        ? <HStack>
          <Center color="gray.600"> <i className="fa-solid fa-utensils"></i></Center>
          <Text fontSize="sm" color="gray.600">{i18n.t('stayIn')}</Text>
          <Text fontSize="sm" color="gray.600"> - {guest} {i18n.t('guest')}</Text>
        </HStack>
        : <HStack>
          <Center><i className="fa-solid fa-bag-shopping"></i></Center>
          <Text fontSize="sm" color="gray.600">{i18n.t('takeOut')}</Text>
        </HStack>}
      <LanguageSelect position={"relative"} top={0} right={0} color={"gray.600"} />
    </Box>
  );
};

export const TabsHeader = ({ show = true, tabs, scrolling }: {
  tabs?: ORDER_INFO[];
  show?: boolean;
  scrolling?: boolean;
}) => {
  return (
    show && tabs?.length !== 0 &&
    <Box display="flex" alignItems="center" top={"3rem"} h="50px"
      borderBottom=".5px solid #e3e3e3" bg="white" px="1rem" zIndex={999}
      overflowX="auto" w="100%" overflowY="hidden">
      <HStack spacing={4} w="200%">
        {tabs?.map((item) => (
          <Center key={item.id}>
            <LayoutTag section={`#${item.id}`} title={item.label} />
          </Center>
        ))}
      </HStack >
    </Box >
  );
};