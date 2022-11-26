import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Navigation/>
      <About/>
    </ChakraProvider>
  )
}

export default App;
