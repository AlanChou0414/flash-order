import { ColorModeScript, theme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
  // </React.StrictMode>
);
