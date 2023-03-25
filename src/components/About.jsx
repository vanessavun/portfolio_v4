import React from "react";
import { Fade } from "react-reveal";

function About() {
  return (
    <section id="about" className="flex justify-center text-sm md:text-base">
      <div className="container">
        <Fade>
          <div className="about-section p-4">
            <h1 className="text-xl uppercase font-bold text-indigo-200 font-poppins py-4">
              ⭐️ About me
            </h1>
            <div className="h-0.5 gradient-div"></div>
            <div className="flex flex-row p-4">
              <div className="about-text leading-5">
                <p className="text-indigo-200 font-medium my-2">
                  Deeply inspired after using a dashboard with a live sample
                  pipeline and its ability to control robots and instruments at
                  a biotech laboratory, I knew I had to go back to my childhood
                  passion in coding. I started with learning C++ and building
                  PCs in middle school, but I was steered to pursue a role as a
                  doctor then a clinical lab scientist in the healthcare/biotech
                  industry.
                </p>
                <p className=" text-indigo-300 font-medium mt-4">
                  I realized that laboratory science wasn't for me and
                  wanted a more challenging role where I had to keep constantly
                  learning. Impatient to learn, I started my self-taught coding
                  journey using various resources such as Codecademy, Scrimba
                  and Udemy.
                </p>
                <p className=" text-blue-300 font-medium mt-4">
                  I thrive at the constant learning and solving problems through
                  code to make a positive impact in people's lives. From my
                  professional experience, I offer empathy, attention to
                  details, and teamwork.
                </p>
                <div className=" text-indigo-300 font-medium my-4">
                  <p className="uppercase text-base">Hobbies & interests:</p>
                  <ul className="flex p-4 flex-wrap font-poppins text-sm">
                    <li className="px-4">🐱Cats</li>
                    <li className="px-4">🧗🏻‍♀️<a href="https://www.instagram.com/rocketnessa/" target="_blank"><i className="underline">Climbing</i></a></li>
                    <li className="px-4">📺K-pop/k-drama</li>
                    <li className="px-4">💃🏽Dance covers</li>
                    <li className="px-4">🪚Home climbing wall</li>
                    <li className="px-4">🛠Custom PC builds</li>
                    <li className="px-4">⌨️Mechanical keyboards</li>
                  </ul>
                </div>
                <div className=" text-indigo-200 font-medium my-4">
                  <p className="uppercase font-medium">Skills:</p>
                  <ul className="flex p-2 flex-wrap font-poppins text-sm">
                    <li className="px-1 m-1 bg-blue-900 rounded-md">JavaScript</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">HTML/CSS</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">React</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Typescript</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Redux</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Tailwind</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">
                      Styled Components
                    </li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">API</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Firebase</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Express</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Node</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">PostgreSQL</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">
                      Project Management
                    </li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">Leadership</li>
                    <li className="px-1 m-1 bg-blue-900 rounded-md">
                      Troubleshooting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default About;
