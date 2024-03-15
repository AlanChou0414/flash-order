import { Box, Button, ButtonProps, Center, Select, Spinner, useBoolean } from "@chakra-ui/react";
import { COOKIES } from "@constants/cookies";
import i18n from "@i18n";
import Cookies from "js-cookie";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShoppingCart from "./footer";

/* Layout Container */
export const Layout = ({ children, title = '', showFooter = true, shoppingItems, langTextColor }: {
  children?: ReactNode;
  title?: string;
  showFooter?: boolean;
  shoppingItems?: number;
  langTextColor?: string;
}) => {
  const [loading, setLoading] = useBoolean();
  useEffect(() => {
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
    }, 500);
  }, []);
  return (
    <Box minHeight="100vh">
      <Helmet><title>Flash Order - {title}</title></Helmet>
      <LanguageSelect color={langTextColor} />
      <LayoutLoading loading={loading} />
      {children}
      <ShoppingCart show={showFooter} item={shoppingItems} />
    </Box>
  );
};
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
      <Select fontWeight="900" size="sm" variant="unstyled" color={color} value={selectedValue}
        onChange={e => handleChangeLanguage(e.target.value)}>
        <option value="en-US">{i18n.t('english')}</option>
        <option value="zh-TW">{i18n.t('chinese')}</option>
      </Select>
    </Center>
  );
};
/* Loading */
export const LayoutLoading = ({ loading }: {
  loading?: boolean;
}) => {
  return (
    loading &&
    <Center minHeight="100vh" bg="#00000050" position="fixed"
      top={0} left={0} bottom={0} right={0} zIndex={999}>
      <Spinner size="xl" thickness=".2rem" color="teal.500" />
    </Center>
  );
};
/* Custom Button */
export const LayoutButton = ({ icon, text, active, onClick, props }: {
  icon?: ReactElement;
  text: string;
  active?: boolean;
  onClick?: () => void;
  props?: ButtonProps;
}) => {
  return (
    <Button {...props} size="sm" leftIcon={icon} border="1px solid" onClick={onClick}
      borderColor="teal.500" borderRadius="30px" bg={active ? "teal.500" : "white"}
      color={active ? "white" : "teal.500"} _active={{ bg: 'teal.500', color: 'white' }}
      _hover={{ bg: 'teal.500', color: 'white' }}>
      {text}
    </Button>
  );
};