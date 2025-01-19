// Imports
import React, { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import animCheck from '../../scripts/anim';

// Component initialization
function Resume() {
  // Animation check effect on component load
  useEffect(() => {
    animCheck();
  });

  // JSX
  return (
    <section id='Resume' className='content-format'>
      <Text
        className='section-header ease-anim'
        id='resume-header'
        fontSize='6xl'
        fontWeight='bold'
        mb='20px'
      >
        Resume
      </Text>
      {/* Resume embed */}
      <object
        className='ease-anim resume-embed'
        type='application/pdf'
        data={require('')}
      >
        {' '}
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can click
          <a className='pdf-dl' href={require('')} download>
            {' '}
            here
          </a>{' '}
          to download the PDF file.
        </p>
      </object>
    </section>
  );
}

// Export component
export default Resume;
