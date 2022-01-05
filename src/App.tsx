import { ChakraProvider } from '@chakra-ui/react';
import { Dashboard } from './Dashboard';

import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';

import { theme } from './styles/theme';
import { TimeProvider } from './contexts/TimeContext';

function App() {
  return (
    <TimeProvider>
      <ChakraProvider theme={theme}>
        <Dashboard />
      </ChakraProvider>
    </TimeProvider>
  );
}

export default App;
