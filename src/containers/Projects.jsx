import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import FeaturedProject from "../components/FeaturedProject";
import ProjectBlock from "../components/ProjectBlock";
import ScrollUp from "../components/ScrollUp";
import Heading from "../components/Heading";
import LCC from "../assets/LCC.gif";
import Kanban from "../assets/Kanban.png";
import A2O from "../assets/A2O.gif";
import { supabase } from "../supabaseClient";

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [ladycrushcrew, setladycrushcrew] = useState({});
  const [kanbanproject, setkanbanproject] = useState({});
  const [applesToOranges, setapplesToOranges] = useState({});

  const fetchProjectsData = async () => {
    try {
      const { data: projects, error } = await supabase
        .from("projects")
        .select("*");
      if (error) {
        console.error(error);
        return;
      }
      setProjectsData(projects);
    } catch (error) {
      console.error("Unexpected error: ", error);
    }
  };
  useEffect(() => {
    fetchProjectsData();
  }, []);
  useEffect(() => {
    if (projectsData) {
      updateProjects(projectsData);
    }
  }, [projectsData]);

  const updateProjects = (fetchedData) => {
    fetchedData.forEach((project) => {
      if (project.title === "LADYCRVSHCREW") {
        setladycrushcrew({ imageUrl: LCC, ...project });
      }
      if (project.title === "Sample Batch Kanban Board") {
        setkanbanproject({ imageUrl: Kanban, ...project });
      }
      if (project.title === "Apples to Oranges: a Grocery Shopping App") {
        setapplesToOranges({ imageUrl: A2O, ...project });
      }
    });
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
