import { Box, Center, HStack, Text } from "@chakra-ui/react";
import i18n from "@i18n";
import { LanguageSelect } from "./layout";

const StatusHeader = ({ show = true, mode, guest }: {
  show?: boolean;
  mode?: boolean;
  guest?: string;
}) => {

  return (
    show &&
    <Box display="flex" justifyContent="space-between" alignItems="center" px="1rem"
      width="100%" position="fixed" top={0} height="3rem" borderBottom=".5px solid #e3e3e3">
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

export default StatusHeader;