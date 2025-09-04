import React from "react";
import { Fade } from "react-awesome-reveal";
import ScrollUp from "../components/ScrollUp";
import chemtracker from "../assets/ChemTracker-SciShield.png";
import biosafety from "../assets/Biosafety-SciShield.jpg";
import ProjectBlock from "../components/ProjectBlock";
import Heading from "../components/Heading";

function Work() {
  const scishieldBlock = {
    imageUrl: chemtracker,
    title: "ChemTracker",
    description:
      "A solution to managing chemical inventories and ensuring compliance. I recently added a new filter to the Chemical Containers search page and implemented an AI tool to gather information off a photo of a chemical container.",
  };
  const biosafetyBlock = {
    imageUrl: biosafety,
    title: "Biosafety",
    description:
      "This is another platform module that is a safety solution to managing biological materials, exposures, and projects. I recently implemented a new UI/UX design for bio registration.",
  };
  return (
    <section id="work" className="flex justify-center">
      <div className="container p-4">
        <Fade>
          <Heading heading="Work" />
          <div className="h-0.5 gradient-div mb-4"></div>
          <div className=" text-indigo-200 font-medium my-4 text-xl">
            <p className="font-medium">
              Software Engineer @TBA, Sep 2025 - present
            </p>
          </div>
          <div className=" text-indigo-200 font-medium my-4 text-xl">
            <p className="font-medium">
              Front-End Engineer{" "}
              <a href="https://www.scisure.com/" target="_blank">
                @SciSure
              </a>
              , Jun 2023 - Sep 2025
            </p>
            <ProjectBlock project={scishieldBlock} />
            <ProjectBlock project={biosafetyBlock} />
          </div>
          <div className=" text-indigo-200 font-medium my-4 text-xl">
            <p className="font-medium">Skills</p>
            <ul className="flex p-2 flex-wrap font-poppins text-base">
              <li className="px-1 m-1 bg-blue-900 rounded-md">React</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Typescript</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">NextJS</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Tailwind</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Firebase</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Node</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">PostgreSQL</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Vue</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">PHP</li>
              <li className="px-1 m-1 bg-blue-900 rounded-md">Drupal</li>
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Work;
