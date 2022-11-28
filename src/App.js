import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

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
      <Navigation
      navSelect = {selectedHandler} />
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

// To do: 
// Increase landing page font sizes
// make elements load on scroll
// other components / pages
// create new favicon
// Contact form and resume section
// Make app responsive 
// https://www.youtube.com/watch?v=EAH8-V455p0
// Make about section two parts side by side when in large view
// Increase font sizes?
// Make about me header button work
// Make footer links work
// Dropshadow on footer / nav

export default App;
