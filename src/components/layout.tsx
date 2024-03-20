import { Box, Button, ButtonProps, Center, Select, Spinner, useBoolean } from "@chakra-ui/react";
import { COOKIES } from "@constants/cookies";
import i18n from "@i18n";
import Cookies from "js-cookie";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ShoppingCart from "./footer";
import { StatusHeader, TabsHeader } from "./header";

/* Layout Container */
export const Layout = ({
  children, title = '',
  showStatusHeader = true, showFooter = true, showTabsHeader = true,
  shoppingItems, tabItems, mode, guest }: {
    children?: ReactNode;
    title?: string;
    showStatusHeader?: boolean;
    showTabsHeader?: boolean;
    showFooter?: boolean;
    tabItems?: ORDER_INFO[];
    shoppingItems?: ORDER_RECORD[];
    langTextColor?: string;
    mode?: boolean;
    guest?: string;
  }) => {
  const [loading, setLoading] = useBoolean();
  useEffect(() => {
    setLoading.on();
    setTimeout(() => {
      setLoading.off();
    }, 500);
  }, []);
  return (
    <Box>
      <Helmet><title>Flash Order - {title}</title></Helmet>
      <LayoutLoading loading={loading} />
      <StatusHeader show={showStatusHeader} mode={mode} guest={guest} />
      <TabsHeader show={showTabsHeader} tabs={tabItems} />
      {children}
      <ShoppingCart show={showFooter} item={shoppingItems} />
    </Box>
  );
};
/* Language Select */
export const LanguageSelect = ({ color, position = 'absolute', top = 5, right = 5 }: {
  color?: string;
  position?: 'relative' | 'absolute'
  top?: number;
  right?: number;
}) => {
  const [selectedValue, setSelectedValue] = useState(Cookies.get(COOKIES.LANG) || 'zh-TW');
  const handleChangeLanguage = (selected: string) => {
    i18n.changeLanguage(selected);
    setSelectedValue(selected);
    Cookies.set(COOKIES.LANG, selected);
    window.location.reload();
  };
  return (
    <Center position={position} top={top} right={right} >
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
    <Center minH="100vh" bg="#00000050" position="sticky"
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
/* Custom Tag */
export const LayoutTag = ({ props, title }: {
  props?: ButtonProps;
  title: string;
}) => {
  return (
    <Button {...props} size="md" borderColor="teal.500" border="1px solid" bg="teal.400"
      borderRadius="8px" _active={{ bg: 'teal.400', color: 'white' }}
      _hover={{ bg: 'teal.400', color: 'white' }}>{title}</Button>
  );
};