import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "../components/Link";
import Heading from "../components/Heading";

function About() {
  const list = ["Test1", "Test2", "Test3"];
  return (
    <section id="about" className="flex justify-center text-sm md:text-base">
      <div className="container">
        <Fade>
          <div className="about-section p-4">
            <Heading heading="Intro" />
            <div className="h-0.5 gradient-div"></div>
            <div className="flex flex-row p-4">
              <div className="about-text leading-7 text-xl">
                <p className="text-indigo-200 font-medium my-2">
                  In 2022, deeply inspired after using an internal biotech
                  company dashboard that showed live sample statuses and its
                  ability to control robots and lab instruments, I wanted to
                  pursue my childhood passion in coding and creativity (visual
                  arts/DIY).
                </p>
                <p className=" text-indigo-200 font-medium mt-4">
                  I realized that laboratory science wasn't for me anymore and
                  wanted a more challenging role where I had to keep constantly
                  learning. I started my self-taught coding journey using
                  various{" "}
                  <Link
                    url={
                      "https://www.linkedin.com/pulse/vanessas-tech-resources-faq-vanessa-vun/"
                    }
                    word={"resources"}
                  />{" "}
                  such as Codecademy, Scrimba and Udemy.
                </p>
                <p className=" text-blue-200 font-medium mt-4">
                  I thrive at the constant learning and solving problems through
                  code to make a positive impact in people's lives. From my
                  professional experience, I offer empathy, attention to
                  details, and teamwork.
                </p>
                <div className=" text-indigo-300 font-medium my-4 text-lg">
                  <p className="uppercase">Hobbies & interests:</p>
                  <ul className="flex p-4 flex-wrap font-poppins">
                    <li className="px-4">🐱Cats</li>
                    <li className="px-4">
                      🧗🏻‍♀️
                      <Link
                        url={"https://www.instagram.com/rocketnessa/"}
                        word={<i className="underline">Climbing</i>}
                      />
                    </li>
                    <li className="px-4">📺K-pop/k-drama</li>
                    <li className="px-4">💃🏽Dance covers</li>
                    <li className="px-4">🪚Home climbing wall</li>
                    <li className="px-4">🛠Custom PC builds</li>
                    <li className="px-4">⌨️Mechanical keyboards</li>
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
