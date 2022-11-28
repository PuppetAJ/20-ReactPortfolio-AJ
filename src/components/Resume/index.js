import React from 'react';
import { Text } from '@chakra-ui/react';

function Resume() {
  return (
    <section id='Resume' className = 'content-format'>
      <Text id='resume-header' fontSize='6xl' fontWeight = 'bold' mb='20px'>Resume</Text>
      <embed src={require('../../assets/PDF/AdrianJResume.pdf')} width="800px" height="2100px" />  
    </section>
  )
}

export default Resume;