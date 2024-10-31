import React from "react";

function Header() {
  return (
    <header className="top-area">
      <div className="header-area flex justify-center bg-black">
        <nav className="container">
          <div className=" flex justify-center sm:justify-between py-4 px-1 text-indigo-300">
            <div className="flex items-center font-sacramento text-3xl -mb-4 font-bold">
              VV
            </div>
            <div className="flex items-center">
              <ul className=" hover:text-white text-sm sm:text-base sm:font-semibold flex">
                <li className="mx-4">
                  <a href="#about">About</a>
                </li>
                <li className="mx-4">
                  <a href="#work">Work</a>
                </li>
                <li className="mx-4">
                  <a href="#projects">Projects</a>
                </li>
                <li className="mx-4">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
