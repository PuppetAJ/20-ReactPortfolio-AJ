// Imports
import React from 'react';

// Component initialization
function Footer() {

  // Array containing all footer icon data
  const icons = [
    {
      name: 'email',
      href: 'mailto:adrianjimenez1950@gmail.com'
    },
    {
      name: 'github',
      href: 'https://github.com/PuppetAJ'
    },
    {
      name: 'phone',
      href: 'tel:4703178662'
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/adrian-jimenez-41a33b23b/'
    }
  ];

  // JSX
  return (
    <footer className='footer'>
      {/* Icons */}
      <div className='icons-wrapper'>
      {icons.map((icon, i) => (
      <a key={i} href={icon.href} rel='noreferrer' target={icon.name === 'phone' ? '' : '_blank' }>
        <img
        alt='footer-icon' 
        src={require(`../../assets/images/${icon.name}.png`)}
        className='icon-format'
        />
      </a>
      ))}
      </div>
      {/* Footer text */}
      <p>ADRIAN JIMENEZ ©2022</p>
    </footer>
  )
}

// Export component
export default Footer;