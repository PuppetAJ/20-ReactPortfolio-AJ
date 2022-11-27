import React from 'react';

function Footer() {

  const icons = [
    'email',
    'github',
    'phone',
    'linkedin'
  ];

  return (
    <footer className='footer'>
      <div className='icons-wrapper'>
      {icons.map((icon, i) => (
        <img 
        src={require(`../../assets/images/${icon}.png`)}
        key={i}
        className='icon-format'
        />
      ))}
      </div>
      <p>ADRIAN JIMENEZ ©2022</p>
    </footer>
  )
}

export default Footer;