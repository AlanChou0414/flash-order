import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from '@hooks/store.hook';
import { router } from '@routes/index';
import theme from '@utils/theme';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <StoreProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </StoreProvider>
  );
};

export default App;
