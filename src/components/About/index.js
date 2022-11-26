import React from 'react';
import { Text } from '@chakra-ui/react'

function About() {
  return (
    <section className = 'about'>
      <Text id='about-header' fontSize='6xl' fontWeight = 'bold'>About</Text>
      <div className='about-wrapper'>
        <div className='avatar-wrapper'></div>
        <div className='about-text'><Text id='about-desc' fontSize='xl' textAlign='center'>Hi! I'm Adrian, and I'm a student currently enrolled at the UNCC's coding bootcamp. I have a passion for coding and game development with JavaScript, and frequently combine my creativity with my coding experience to create some unconventional projects. I aspire to grow my skills to eventually be able to become a professional full-stack web developer. When I'm not coding, I'm reading up on how to improve my skills or gaming. </Text></div>
      </div>
    </section>
  )
};

export default About;