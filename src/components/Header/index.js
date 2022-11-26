import { Text } from '@chakra-ui/react'
import React from 'react';
import Canvas from '../Canvas';
import { ReactComponent as MySVG } from '../../assets/images/down.svg'

function Header() {
  return (
      <>
        <Canvas/>
        <div className='header-style'>
          <div className='header-wrapper'>
          <Text id='header-top' bgGradient='linear(to-l, #B393F4, #4286f4)' bgClip='text' fontWeight = 'extrabold' fontSize ='6xl'>
            Hello, welcome to my portfolio
          </Text>
          <Text id='header-bottom' fontSize = '3xl' color = 'white' noOfLines={2} maxWidth = '50rem' align = 'center' mt = {2}>
            My name is <span className='name-format'>Adrian Jimenez</span>, and I'm a student aspiring to become {"\n"} a full stack web developer.
          </Text>
          <div className='button-wrapper'>
            Learn about me <MySVG />
          </div>
          </div>
        </div>
      </>
  )
};

export default Header;