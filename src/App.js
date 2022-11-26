import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Navigation/>
    </ChakraProvider>
  )
}

export default App;
