import { ChakraProvider } from '@chakra-ui/react';
import { router } from '@routes/index';
import theme from '@utils/theme';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
