import React from "react";
import { Fade } from "react-reveal";
import FeaturedProject from "./FeaturedProject";
import ProjectBlock from "./ProjectBlock";


function Projects() {
  const ladycrushcrew = {
    imageUrl: "https://i.ibb.co/4M1V27j/Lady-Crush-Crew.gif",
    title: "LADYCRVSHCREW",
    description: "Web app for a real climbing community group with user authentication (Google and non-Google), store, shopping cart, and test Stripe payment.",
    badges: ["React", "Typescript", "Stripe", "Redux/Saga", "Firebase", "Netlify"],
    liveUrl: "https://ladycrushcrew.vanessavun.com/",
    githubUrl: "https://github.com/vanessavun/ladycrushcrewV3"
  }
  const project1 = {
    imageUrl: "https://i.ibb.co/MBsQ7VZ/Screenshot-2022-12-29-112403.png",
    title: "Sample Batch Kanban Board",
    description: "This kanban board serves as a visual presentation of batches running through the laboratory. Features: log in/sign up/sign out via Firebase auth and a countdown timing of batches to help keep track of batch status.",
    badges: ["React", "Bootstrap", "Context API", "Firebase", "Netlify"],
    liveUrl: "https://kanban.vanessavun.com/",
    githubUrl: "https://github.com/vanessavun/labtech"
  }
  const project2 = {
    imageUrl: "https://i.ibb.co/5FM1C2s/Screenshot-2022-12-23-225355.png",
    title: "Face Detection App",
    description: "This app has a Face Detection App by Clarifai with an entry counter, user registration and log in authentication without OAuth.",
    badges: ["React", "API", "PostgreSQL", "Node", "Express", "Heroku/Render"],
    liveUrl: "https://smartbrain.vanessavun.com/",
    githubUrl: "https://github.com/vanessavun/ztm-face-recognition"
  }
  const project3 = {
    imageUrl: "https://i.ibb.co/mXPFgHF/portfolio.png",
    title: "Personal Portfolio v 3.0",
    description: "My personal portfolio is a single page app to show about me, my skills, and personal projects.",
    badges: ["React", "Tailwind CSS", "Vite", "Netlify"],
    urls: [
      ["https://vanessavun.github.io/portfolio/", "v 1.0"],
      ["https://delicate-lokum-492537.netlify.app/", "v 2.0"]
    ],
    githubUrl: "https://github.com/vanessavun/portfolio_v3"
  }
  const project4 = {
    imageUrl: "https://i.ibb.co/whfV5zk/Apples-to-Oranges.gif",
    title: "Apples to Oranges: a Grocery Shopping App",
    description: "DeveloperWeek 2023 Hackathon project of a shopping app that finds the best prices near the user for a product or item. Role: project presentation, project manager, front-end developer (navigation, home page, responsiveness, hamburger menu, copywriting, illustrations/design choice)",
    badges: ["React", "Tailwind CSS", "Firebase", "MapBox", "MapQuest API", "Vite", "Netlify", "Figma"],
    liveUrl: "https://apples2oranges.netlify.app/",
    githubUrl: "https://github.com/Oh-Bits-Please/hackathon-2023"
  }

  const liveSiteButton = (url) => {
    return (
      <button
        type="button"
        className="text-indigo-100 font-medium text-sm px-4 bg-indigo-500 rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          window.open(url, "_blank");
        }}
      >
        See Live
      </button>
    );
  };

  return (
    <section id="projects" className="flex justify-center">
      <div className="container p-4">
        <h1 className="text-xl uppercase font-bold text-indigo-200 font-serif py-4">
          ⭐️ Projects
        </h1>
        <div className="h-0.5 gradient-div mb-4"></div>
        <Fade>
          {/* Featured Project */}
          <FeaturedProject project={project4} />
          {/* Project LadyCrushCrew */}
          <ProjectBlock project={ladycrushcrew} />
          {/* Project 1 Kanban Board */}
          <ProjectBlock project={project1} />
          {/* Project 2 Face */}
          <ProjectBlock project={project2} />
          {/* Project 3 Portfolio */}
          <ProjectBlock project={project3} />
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
