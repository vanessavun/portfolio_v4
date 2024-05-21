import React from "react";

function Heading({ heading }) {
  return (
    <h1 className="text-xl uppercase font-bold text-indigo-200 font-serif py-1">
      {heading}
    </h1>
  );
}

export default Heading;
