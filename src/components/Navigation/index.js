// Imports
import React from 'react';

// Component initialization
function Navigation(props) {

  // Deconstruct props
  const {navSelect} = props;

  // JSX
  return (
    <div className='nav-wrapper'>
      {/* Nav list */}
      <ul className = 'nav-links'>
        <li>
          <a name='about' onClick = {navSelect} className='active' href="#About-Me">About Me</a>
        </li>
        <li>
          <a name='work' onClick = {navSelect} href="#Work">Portfolio</a>
        </li>
        <li>
          <a name='contact' onClick = {navSelect} href="#Contact">Contact Me</a>
        </li>
        <li>
          <a name='resume' onClick = {navSelect} href="#Resume" title="Coming Soon!">Resume</a>
        </li>
      </ul>
    </div>
  )
};

// Export component
export default Navigation;