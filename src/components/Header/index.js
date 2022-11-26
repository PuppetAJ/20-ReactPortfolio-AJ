import { Text } from '@chakra-ui/react'
import React from 'react';

function Header() {
  return (
    <div className='header-style'>
      <Text bgGradient='linear(to-l, #B393F4, #4286f4)' bgClip='text' fontWeight = 'extrabold' fontSize ='6xl'>
        Hello, welcome to my portfolio
      </Text>
      <Text fontSize = '3xl' color = 'white' noOfLines={2} maxWidth = '50rem' align = 'center' mt = {2}>
        My name is <span className='name-format'>Adrian Jimenez</span>, and I'm a student aspiring to become {"\n"} a full stack web developer.
      </Text>
    </div>
  )
};

export default Header;