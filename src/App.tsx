import { ChakraProvider } from '@chakra-ui/react'
import { Dashboard } from './Dashboard';

import '@fontsource/rubik/300.css'
import '@fontsource/rubik/400.css'
import '@fontsource/rubik/500.css'

import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
