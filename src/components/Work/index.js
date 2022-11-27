import React from "react";
import { Text } from "@chakra-ui/react";
import Project from "../Project";

function Work() {

  const projectArr = [
    {
      languages: 'HTML, CSS',
      name: 'Run Buddy basic website',
      description: 'The first website I built during my program with UNCC. just a simple HTML/CSS site.',
      imgName: 'runbuddy',
      alt: 'Run Buddy website',
      githubLink: 'https://github.com/PuppetAJ/run-buddy',
      deployedLink: 'https://puppetaj.github.io/run-buddy/'
    },
    {
      languages: 'HTML, CSS, JAVASCRIPT',
      name: 'Original portfolio',
      description: 'My first portfolio, made shortly after the Run Buddy site. Definitely not the best quality but a major learning point.',
      imgName: 'portfolio-original',
      alt: 'My original portfolio',
      githubLink: 'https://github.com/PuppetAJ/02-Portfolio-AJ',
      deployedLink: 'https://puppetaj.github.io/02-Portfolio-AJ/'
    }
  ]

  return (
    <section id = 'Work' className='content-format'>
      <Text id='work-header' fontSize='6xl' fontWeight = 'bold'>Work</Text>
      {projectArr.map((el, i) => (
        <div key={i}>
          <Project
            languages = {el.languages}
            name = {el.name}
            description = {el.description}
            imgName = {el.imgName}
            alt = {el.alt}
            githubLink = {el.githubLink}
            deployedLink = {el.deployedLink}
          />
        </div>
      ))}
    </section>
  )
}

export default Work;