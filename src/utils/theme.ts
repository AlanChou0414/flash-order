import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles: {
    global: () => ({
      'body': {
        padding: 0,
        margin: 0,
        height: '100%',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        color: 'gray.900',
        background: 'white',
      }
    })
  },
  components: {
    Text: defineStyleConfig({
      baseStyle: {
        fontSize: 'md'
      },
    }),
    Button: defineStyleConfig({
      baseStyle: {

      }
    })
  },
});

export default theme;