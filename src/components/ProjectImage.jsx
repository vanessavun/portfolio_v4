import React from "react";

function ProjectImage({ url }) {
  return (
    <div className="rotate p-4">
      <img src={url} className="rounded-lg drop-shadow-lg sm:max-w-xs" />
    </div>
  );
}

export default ProjectImage;
