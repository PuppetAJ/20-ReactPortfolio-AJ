import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {

  const [selected, setSelected] = React.useState('about');

  const selectedHandler = (e) => {
    if(e.target.className != 'active') {
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for(const el of children) {
          if(el.className === 'active') el.className = 'not';
        }
      }
      e.target.className = 'active'
      setSelected(e.target.name);
    }
  }

  return (
    <ChakraProvider>
      <Header/>
      <Navigation/>
      {selected === 'about' 
      ? <About/> 
      : selected === 'work' 
      ? <Work/> 
      : <About/>}
      <Footer/>
    </ChakraProvider>
  )
}

// To do: 
// Increase landing page font sizes
// make elements load on scroll
// make navbar select correct item when in view
// Home nav?
// other components / pages
// create new favicon
export default App;
