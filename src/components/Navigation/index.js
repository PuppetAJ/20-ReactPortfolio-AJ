import React from 'react';

function Navigation(props) {

  const {navSelect} = props;

  return (
    <div className='nav-wrapper'>
      <ul className = 'nav-links'>
        <li>
          <a name='about' onClick = {navSelect} className='active' href="#About-Me">About Me</a>
        </li>
        <li>
          <a name='work' onClick = {navSelect} href="#Work">Work</a>
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

export default Navigation;