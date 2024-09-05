import React from "react";
import { Fade } from "react-awesome-reveal";
import FeaturedProject from "../components/FeaturedProject";
import ProjectBlock from "../components/ProjectBlock";
import ScrollUp from "../components/ScrollUp";
import Heading from "../components/Heading";
import LCC from "../assets/LCC.gif";
import Kanban from "../assets/Kanban.png";
import A2O from "../assets/A2O.gif";

function Projects() {
  const ladycrushcrew = {
    imageUrl: LCC,
    title: "LADYCRVSHCREW",
    description:
      "Web app for a real climbing community group with user authentication (Google and non-Google), store, shopping cart, and test Stripe payment.",
    badges: [
      "React",
      "Typescript",
      "Stripe",
      "Redux/Saga",
      "Firebase",
      "Netlify",
    ],
    liveUrl: "https://ladycrushcrew.vanessavun.com/",
    githubUrl: "https://github.com/vanessavun/ladycrushcrewV3",
  };
  const kanbanproject = {
    imageUrl: Kanban,
    title: "Sample Batch Kanban Board",
    description:
      "This kanban board serves as a visual presentation of batches running through the laboratory. Features: log in/sign up/sign out via Firebase auth and a countdown timing of batches to help keep track of batch status.",
    badges: ["React", "Bootstrap", "Context API", "Firebase", "Netlify"],
    liveUrl: "https://kanban.vanessavun.com/",
    githubUrl: "https://github.com/vanessavun/labtech",
  };
  const applesToOranges = {
    imageUrl: A2O,
    title: "Apples to Oranges: a Grocery Shopping App",
    description:
      "DeveloperWeek 2023 Hackathon project of a shopping app that finds the best prices near the user for a product or item. Role: project presentation, project manager, front-end developer (navigation, home page, responsiveness, hamburger menu, copywriting, illustrations/design choice)",
    badges: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "MapBox",
      "MapQuest API",
      "Vite",
      "Netlify",
      "Figma",
    ],
    liveUrl: "https://apples2oranges.netlify.app/",
    githubUrl: "https://github.com/Oh-Bits-Please/hackathon-2023",
  };

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
        <Fade>
          <Heading heading="Personal projects" />
          <div className="h-0.5 gradient-div mb-4"></div>
          <FeaturedProject project={applesToOranges} />
          <ProjectBlock project={ladycrushcrew} />
          <ProjectBlock project={kanbanproject} />
        </Fade>
      </div>
    </section>
  );
}

export default Projects;
