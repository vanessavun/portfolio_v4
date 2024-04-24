import React from "react";
import LiveSiteButton from "./LiveSiteButton";
import Badge from "./Badge";
import ProjectImage from "./ProjectImage";
import Link from "./Link";

function FeaturedProject({ project }) {
  const { imageUrl, title, description, badges, liveUrl, githubUrl } = project;
  return (
    <div className="projects-container sm:flex bg-indigo-800 py-4">
      <div className="rotate relative">
        <ProjectImage url={imageUrl} />
        <span className="featured absolute top-0 left-0 bg-yellow-300 m-0 p-1 text-xs uppercase font-extrabold">
          Featured
        </span>
      </div>
      <div className="justify-center">
        <h2 className="text-indigo-200 font-bold text-normal px-4">{title}</h2>
        <p className=" text-blue-200 font-normal px-4 pt-4">{description}</p>
        <ul className="italic p-2 flex flex-wrap">
        {badges.map(badge => <Badge badge={badge} key={badge} />)}
        </ul>
        <div className="flex flex-row px-4 py-2">
          <LiveSiteButton url={liveUrl} />
          <div className=" text-indigo-300 font-medium px-4 py-2 uppercase">
            <Link url={githubUrl} word={"Code"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
