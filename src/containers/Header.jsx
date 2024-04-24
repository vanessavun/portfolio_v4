import React from 'react'

function Header() {
  return (
    <header className="top-area">
        <div className="header-area flex justify-center bg-black">
          {/* Navigation */}
          <nav className='container'>
            <div className=" flex justify-center sm:justify-between py-4 px-1 text-indigo-300">
              {/* Header Navigation */}
              <div className="flex items-center font-sacramento text-3xl -mb-4 font-bold">VV</div>
              <div className="flex items-center">
                <ul className=" hover:text-white text-sm sm:text-base sm:font-semibold flex">
                  <li className="mx-4">
                    <a href="#about">About</a>
                  </li>
                  <li className="mx-4">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="mx-4">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="mx-4">
                    <a href="https://www.linkedin.com/in/vanessavun/" target="_blank">LinkedIn</a>
                  </li>
                </ul>
              </div>
              {/* End header navigation */}
            </div>
          </nav>
          {/* End navigation */}
        </div>
        {/* End top area */}
      </header>
  )
}

export default Header