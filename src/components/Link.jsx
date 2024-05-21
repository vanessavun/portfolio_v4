import React from "react";

function Link({ url, word }) {
  return (
    <a href={url} target="_blank" rel="noopener">
      {word}
    </a>
  );
}

export default Link;
