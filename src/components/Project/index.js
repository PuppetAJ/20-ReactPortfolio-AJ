// Imports
import React from "react";
import { ReactComponent as GitHubSVG } from '../../assets/images/GitHub.svg';
import { ReactComponent as EyeSVG } from '../../assets/images/Eye.svg';

// Component initialization
function Project(props) {
  // Deconstruct props
  const { languages, name, description, imgName, githubLink, deployedLink, alt } = props;

  // Mouse enter func
  function mouseEnter(e) {
    // Gets closest project and sets the image to 15% opacity
    // sets the buttons to 100% opacity
    const el = e.target.closest('.project-format');
    const children = el.firstChild.children;
    for (const child of children) {
      if (child.className === 'project-button-wrapper') {
        child.style.opacity = '100%';
        child.style.transition = 'all 0.4s';
      } else {
        child.style.opacity = '15%'
        child.style.transition = 'all 0.4s';
      }
    }
  }

  // Mouse exit func
  function mouseLeave(e) {
    // Gets closest project and sets the image to 100% opacity
    // sets the buttons to 0% opacity
    const el = e.target.closest('.project-format');
    const children = el.firstChild.children;
    for (const child of children) {
      if (child.className === 'project-button-wrapper') {
        child.style.opacity = '0%';
        child.style.transition = 'all 0.4s';
      } else {
        child.style.opacity = '100%'
        child.style.transition = 'all 0.4s';
      }
    }
  }

  // JSX
  return (
    <article className='project-format'>
      {/* Mouse watch wrapper */}
      <div onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className='project-image'>
        {/* Buttons */}
        <div className='project-button-wrapper'>
          <a target='_blank' rel='noreferrer' href={githubLink} className='project-button'><GitHubSVG/>GitHub</a>
          <a target='_blank' rel='noreferrer' href={deployedLink} className='project-button'><EyeSVG/>View Preview</a>
        </div>
        {/* Img */}
        <img alt={alt} className='project-img-format' src={require(`../../assets/images/${imgName}.png`)}></img>
      </div>
      {/* Project text */}
      <div className='project-text'>
        <h3>{languages}</h3>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

// Export component
export default Project;