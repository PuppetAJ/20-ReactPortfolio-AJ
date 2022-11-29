// Imports
import { Text } from '@chakra-ui/react'
import React from 'react';
import Canvas from '../Canvas';
import { ReactComponent as MySVG } from '../../assets/images/down.svg'

// Component initialization
function Header(props) {
  // Deconstruct props
  const {aboutBtnHandler} = props;

  // JSX
  return (
      <>
        {/* Background canvas component */}
        <Canvas/>
        {/* Header */}
        <header className='header-style'>
          <div className='header-wrapper'>
            {/* Line 1 */}
            <Text id='header-top' bgGradient='linear(to-l, #B393F4, #4286f4)' bgClip='text' fontWeight = 'extrabold' fontSize = {{base: '2xl', sm:'4xl', md: '5xl' , lg:'6xl', xl: '7xl', '2xl': '8xl'}} noOfLines={2} maxWidth={{base: '30rem', sm: '40rem', md: '50rem', lg: '60rem', xl: '70rem', '2xl': '100rem'}} align='center'>
              Hello, welcome to my portfolio
            </Text>
            {/* Line 2 */}
            <Text id='header-bottom' fontSize = {{base: 'md', sm:'xl', md: '2xl', lg: '3xl', xl: '4xl'}} color = 'white' noOfLines={3} maxWidth = {{base: '20rem', sm: '30rem', lg: '50rem', xl: '70rem', '2xl': '80rem'}} align = 'center' mt = {2}>
              My name is <span className='name-format'>Adrian Jimenez</span>, and I'm a student aspiring to become {"\n"} a full stack web developer.
            </Text>
            {/* About me button */}
            <a onClick={aboutBtnHandler} href='#About-Me' className='button-wrapper'>
              Learn about me <MySVG />
            </a>
          </div>
        </header>
      </>
  )
};

// Export component
export default Header;