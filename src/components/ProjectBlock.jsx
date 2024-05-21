import React from "react";
import LiveSiteButton from "./LiveSiteButton";
import Badge from "./Badge";
import ProjectImage from "./ProjectImage";
import Link from "./Link";

function ProjectBlock({ project }) {
  const { imageUrl, title, description, badges, liveUrl, urls, githubUrl } =
    project;
  return (
    <div className="projects-container sm:flex py-4">
      <ProjectImage url={imageUrl} />
      <div className="flex flex-col justify-center">
        <h2 className="text-indigo-200 font-poppins font-medium text-lg uppercase px-4">
          {title}
        </h2>
        <p className="text-indigo-300 font-normal px-4 pt-2">{description}</p>
        <ul className="p-2 flex flex-wrap">
          {badges.map((badge) => (
            <Badge badge={badge} key={badge} />
          ))}
        </ul>
        <div className="flex flex-row px-4 py-2">
          {liveUrl && <LiveSiteButton url={liveUrl} />}
          {urls &&
            urls.map((url) => {
              return <LiveSiteButton url={url[0]} name={url[1]} key={url} />;
            })}
          <div className=" text-indigo-300 uppercase px-4 py-2">
            <Link url={githubUrl} word={"Code"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
