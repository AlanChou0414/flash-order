import { Box, Center, HStack, Text } from "@chakra-ui/react";
import i18n from "@i18n";
import { LanguageSelect, LayoutTag } from "./layout";

export const StatusHeader = ({ show = true, mode, guest }: {
  show?: boolean;
  mode?: boolean;
  guest?: string;
}) => {

  return (
    show &&
    <Box display="flex" justifyContent="space-between" alignItems="center" px="1rem"
      width="100%" position="sticky" top={0} height="3rem" borderBottom=".5px solid #e3e3e3"
      bg="white">
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

export const TabsHeader = ({ show = true, tabs }: {
  tabs?: ORDER_INFO[];
  show?: boolean;
}) => {
  return (
    show && tabs?.length !== 0 &&
    <Box display="flex" alignItems="center" position="sticky" top={"3rem"} height="3rem"
      borderBottom=".5px solid #e3e3e3" bg="white" px="1rem"
      overflowX="auto" width="100%" overflowY="hidden">
      <HStack spacing={4} width="200%">
        {tabs?.map((item) => (
          <Center key={item.id}><LayoutTag title={item.label} /></Center>
        ))}
      </HStack >
    </Box >
  );
};