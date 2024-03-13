import { ThemeComponentProps, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      'body': {
        maxWidth: '768px',
        padding: 0,
        margin: 0,
        height: '100%',
        fontSize: 'sm',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900',
        background: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      }
    })
  },
  semanticTokens: {
    colors: {
      // success: {
      //   default: 'green.400',
      //   _dark: 'blue.400',
      //   _light: 'green.400'
      // },
      // error: 'red.500',
      // text: {
      //   default: 'gray.900',
      //   _dark: 'gray.50',
      //   _light: 'gray.900'
      // },
      // background: {
      //   default: 'blackAlpha.800',
      //   _dark: 'gray.400',
      //   _light: 'blackAlpha.800'
      // },
    },
  },
})

export default theme