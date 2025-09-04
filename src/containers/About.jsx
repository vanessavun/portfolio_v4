import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "../components/Link";
import Heading from "../components/Heading";

function About() {
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
                  In 2022, I felt a spark of inspiration while using a biotech
                  dashboard that displayed live sample statuses and even
                  controlled lab robots and instruments. That moment rekindled
                  my childhood passion for coding and creativity (whether
                  through visual arts or DIY projects).
                </p>
                <p className=" text-indigo-200 font-medium mt-4">
                  I realized that laboratory science was no longer where I
                  wanted to grow. I craved a role that challenged me to keep
                  learning and problem-solving every day. So, I began a
                  self-taught coding journey with platforms like Codecademy,
                  Scrimba, and Udemy.
                </p>
                <p className=" text-blue-200 font-medium mt-4">
                  Today, I thrive on turning complex problems into elegant
                  solutions that positively impact people’s lives. From my
                  background in science, I bring empathy, meticulous attention
                  to detail, and a collaborative spirit to every project I work
                  on.
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
