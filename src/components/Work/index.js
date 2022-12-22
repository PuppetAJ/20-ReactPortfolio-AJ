// Imports
import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import Project from "../Project";
import animCheck from "../../scripts/anim";

// Component initialization
function Work() {
  // Animation check on component load
  useEffect(() => {
    animCheck();
  });

  // Array containing project data
  const projectArr = [
    {
      languages: "HTML, CSS",
      name: "Run Buddy basic website",
      description:
        "The first website I built during my program with UNCC. just a simple HTML/CSS site.",
      imgName: "runbuddy",
      alt: "Run Buddy website",
      githubLink: "https://github.com/PuppetAJ/run-buddy",
      deployedLink: "https://puppetaj.github.io/run-buddy/",
    },
    // {
    //   languages: "HTML, CSS, JAVASCRIPT",
    //   name: "Original portfolio",
    //   description: "My first portfolio, made shortly after the Run Buddy site.",
    //   imgName: "portfolio-original",
    //   alt: "My original portfolio",
    //   githubLink: "https://github.com/PuppetAJ/02-Portfolio-AJ",
    //   deployedLink: "https://puppetaj.github.io/02-Portfolio-AJ/",
    // },
    {
      languages: "HTML, CSS, BULMA CSS, JS",
      name: "RoadE",
      description:
        "An app that lets you filter for events near you area by location, genre, and more. Stores search history.",
      imgName: "roade",
      alt: "RoadE website banner",
      githubLink: "https://github.com/areed98/RoadE",
      deployedLink: "https://areed98.github.io/RoadE/",
    },
    {
      languages: "JS, NODE, EXPRESS, MYSQL, BOOTSTRAP",
      name: "Tech Blog Demo",
      description:
        "A demo tech blog app that allows you to login, create/edit posts, and add comments.",
      imgName: "blog",
      alt: "Tech blog demo website",
      githubLink: "https://github.com/PuppetAJ/14-Blog-AJ",
      deployedLink: "https://tech-blog-aj.herokuapp.com",
    },
    {
      languages: "JS, WEBPACK, WORKBOX, IDB, EXPRESS",
      name: "Just Another Text Editor",
      description:
        "A simple text editor PWA that can be installed on your machine and functions offline using service workers which cache the site data on your machine.",
      imgName: "jate",
      alt: "Just another text editor website",
      githubLink: "https://github.com/PuppetAJ/19-TextEditor-AJ",
      deployedLink: "https://frozen-journey-17981.herokuapp.com/",
    },
    {
      languages: "JS, THREE.JS, MYSQL, HANDLEBARS",
      name: "GrimRepo",
      description:
        "A 3D card game heavily based off of the game Inscryption. It features user authentication, highscore tracking, and many custom cards to use.",
      imgName: "grimrepo",
      alt: "The GrimRepo website",
      githubLink: "https://github.com/PuppetAJ/GrimRepo",
      deployedLink: "https://grimrepo-aj.herokuapp.com/",
    },
    {
      languages: "JS, REACT THREE FIBER, MONGODB, REACT.JS",
      name: "Chunk'd",
      description:
        "A 3D recreation of a minecraft chunk featuring procedurally generated terrian and a forum to post builds. It's also a PWA!",
      imgName: "chunkd",
      alt: "The Chunkd website",
      githubLink: "https://github.com/PuppetAJ/ReactMC",
      deployedLink: "https://chunkd-aj.herokuapp.com/",
    },
  ];

  // JSX
  return (
    <section id="Work" className="content-format">
      {/* Header */}
      <Text
        className="section-header ease-anim"
        id="work-header"
        fontSize="6xl"
        fontWeight="bold"
      >
        Work
      </Text>
      {/* Page info */}
      <Text
        className="ease-anim"
        color="#A0AEC0"
        fontSize="xl"
        textAlign="center"
        maxWidth={{ base: 450, md: 750 }}
        m="1rem"
      >
        This is some of the work I've done over the past 6 months i've studied
        to become a developer. Some may be simple {"\n"}, however they
        illustrate the progression of my skills through this journey.
      </Text>
      {/* Projects */}
      <div className="ease-anim projects-container">
        {projectArr.map((el, i) => (
          <div className="ease-anim" key={i}>
            <Project
              languages={el.languages}
              name={el.name}
              description={el.description}
              imgName={el.imgName}
              alt={el.alt}
              githubLink={el.githubLink}
              deployedLink={el.deployedLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Export component
export default Work;
