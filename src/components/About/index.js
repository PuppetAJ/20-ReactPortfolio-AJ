import React from 'react';
import { Text } from '@chakra-ui/react'

function About() {
  const techs = [
    'react',
    'node.js',
    'git',
    'javascript',
    'mongodb',
    'css',
    'express.js',
    'html',
    'mysql'
  ];

  const toCaps = function(string) {
    return string.toUpperCase();
  }

  return (
    <section id='About-Me' className = 'content-format'>
      <Text id='about-header' fontSize='6xl' fontWeight = 'bold'>About</Text>
      <div className='about-wrapper'>
        <div title='I am clearly a fan of Celeste' className='avatar-wrapper'></div>
        <div className='content-text'><Text id='about-desc' fontSize='xl' textAlign='center' color='#A0AEC0'>Hi! I'm Adrian, and I'm a student currently enrolled at the UNCC's coding bootcamp. I have a passion for coding and game development with JavaScript, and frequently combine my creativity with my coding experience to create some unconventional projects. I aspire to grow my skills to eventually be able to become a professional full-stack web developer. When I'm not coding, I'm reading up on how to improve my skills or gaming. </Text></div>
      </div>
      <div className='techs-container'>
        {techs.map((tech, i) => (
          <div key={i} className='tech-wrapper'>
            <img
            className='tech-format'
            src={require(`../../assets/images/${tech}.png`)}
            alt={tech}>
            </img>
            <p>{toCaps(tech)}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default About;