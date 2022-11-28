import React, { useEffect } from "react";
import { ReactComponent as GitHubSVG } from '../../assets/images/GitHub.svg';
import { ReactComponent as EyeSVG } from '../../assets/images/Eye.svg';

function Project(props) {
  const { languages, name, description, imgName, githubLink, deployedLink, alt } = props;

  function mouseEnter(e) {
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

  function mouseLeave(e) {
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

  return (
    <article className='project-format'>
      <div onMouseLeave={mouseLeave} onMouseEnter={mouseEnter} className='project-image'>
        <div className='project-button-wrapper'>
          <a target='_blank' href={githubLink} className='project-button'><GitHubSVG/>GitHub</a>
          <a target='_blank' href={deployedLink} className='project-button'><EyeSVG/>View Preview</a>
        </div>
        <img alt={alt} className='project-img-format' src={require(`../../assets/images/${imgName}.png`)}></img>
      </div>
      <div className='project-text'>
        <h3>{languages}</h3>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Project;