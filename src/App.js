// Imports
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

// App component initialization
function App() {

  // Selected nav state tracker
  const [selected, setSelected] = React.useState('about');

  // Detects which nav el was detected and sets the correct one to active
  const selectedHandler = (e) => {
    if(e.target.className !== 'active') {
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for(const el of children) {
          if(el.className === 'active') el.className = 'not';
        }
      }
      e.target.className = 'active';
      setSelected(e.target.name);
    }
  }

  // Detects if the about button in the header was pressed
  // If so, sets about in nav to selected
  const aboutBtnHandler = (e) => {
    if(e.target.className === 'button-wrapper') {
      setSelected('about');
      const children = document.querySelector('.nav-links').children;
      for (const el of children) {
        const children = el.children;
        for(const el of children) {
          if(el.className === 'active') el.className = 'not';
        }
      }
      document.querySelector('a[name="about"]').className = 'active';
    }
  }

  // JSX
  return (
    // Chakra provider wrapper
    <ChakraProvider>
      {/* Components */}
      <Header
      aboutBtnHandler = {aboutBtnHandler} />
      <Navigation
      navSelect = {selectedHandler} />
      {/* Conditional rendering */}
      {selected === 'about' 
      ? <About/> 
      : selected === 'work' 
      ? <Work/> 
      : selected === 'contact'
      ? <ContactForm/>
      : selected === 'resume' 
      ? <Resume/> :
      <About/> }
      <Footer/>
    </ChakraProvider>
  )
}

// Export app
export default App;
