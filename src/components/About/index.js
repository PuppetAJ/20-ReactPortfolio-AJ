// Imports
import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import animCheck from '../../scripts/anim';

// Component initialization
function About() {

  // Uses animCheck script as an effect on component load
  useEffect(() => {
    animCheck();
  });

  // Array of technologies to display
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

  // Function to capitalize all letters in a string
  const toCaps = function(string) {
    return string.toUpperCase();
  }

  // JSX
  return (
    // Section divider
    <section id='About-Me' className = 'content-format'>
      {/* Header */}
      <Text className='section-header ease-anim' id='about-header' fontSize={{base: '5xl', md: '6xl'}} fontWeight = 'bold'>About</Text>
      <div className='about-layout'>
        {/* Avatar */}
        <div className='ease-anim about-wrapper'>
          <div title='I am clearly a fan of Celeste' className='ease-anim avatar-wrapper'></div>
          <div className='ease-anim content-text'><Text className='ease-anim' id='about-desc' fontSize={{base: 'lg', md: 'xl', xl: '2xl'}} textAlign='center' color='#A0AEC0'>Hi! I'm Adrian, and I'm a student currently enrolled at the UNCC's coding bootcamp. I have a passion for coding and game development with JavaScript, and frequently combine my creativity with my coding experience to create some unconventional projects. I aspire to grow my skills to eventually be able to become a professional full-stack web developer. When I'm not coding, I'm reading up on how to improve my skills or gaming. </Text></div>
        </div>
        {/* Container for techs */}
        <div className='ease-anim techs-container'>
          {/* maps jsx to each tech */}
          {techs.map((tech, i) => (
            <div key={i} className='ease-anim tech-wrapper'>
              <img
              className='tech-format'
              src={require(`../../assets/images/${tech}.png`)}
              alt={tech}>
              </img>
              <p>{toCaps(tech)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

// Export component
export default About;