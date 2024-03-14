import { Button, ButtonProps, Center, Select } from "@chakra-ui/react";
import { COOKIES } from "@constants/cookies";
import i18n from "@i18n";
import Cookies from "js-cookie";
import { ReactElement, useState } from "react";

/* Language Select */
export const LanguageSelect = ({ color }: {
  color?: string;
}) => {
  const [selectedValue, setSelectedValue] = useState(Cookies.get(COOKIES.LANG) || 'zh-TW');
  const handleChangeLanguage = (selected: string) => {
    i18n.changeLanguage(selected);
    setSelectedValue(selected);
    Cookies.set(COOKIES.LANG, selected);
    window.location.reload();
  };
  return (
    <Center position="absolute" top={5} right={5}>
      <Select size="sm" variant="unstyled" color={color || 'text'} value={selectedValue}
        onChange={e => handleChangeLanguage(e.target.value)}>
        <option value="en-US">{i18n.t('english')}</option>
        <option value="zh-TW">{i18n.t('chinese')}</option>
      </Select>
    </Center>
  );
};

export const LayoutButton = ({ icon, text, active, onClick, props }: {
  icon?: ReactElement;
  text: string;
  active?: boolean;
  onClick?: () => void;
  props?: ButtonProps;
}) => {
  return (
    <Button {...props} size="sm" leftIcon={icon} border="1px solid" onClick={onClick}
      borderColor="teal.500" borderRadius="50px" bg={active ? "teal.500" : "white"}
      color={active ? "white" : "teal.500"} _active={{ bg: 'teal.500', color: 'white' }}
      _hover={{ bg: 'teal.500', color: 'white' }}>
      {text}
    </Button>
  );
};