import { Text } from '@chakra-ui/react'
import React from 'react';

function Navigation() {
  return (
    <div className='nav-wrapper'>
      <ul className = 'nav-links'>
        <li>
          <a href="#About-Me">About Me</a>
        </li>
        <li>
          <a href="#Work">Work</a>
        </li>
        <li>
          <a href="#Contact">Contact Me</a>
        </li>
        <li>
          <a href="#" title="Coming Soon!">Resume</a>
        </li>
      </ul>
    </div>
  )
};

export default Navigation;