import React from "react";

function ScrollUp() {
  function scrollToTop() {
    window.scrollTo({ top: 0 });
  }
  return (
    <p className="flex justify-end px-3" onClick={scrollToTop}>
      Scroll to top
    </p>
  );
}

export default ScrollUp;
