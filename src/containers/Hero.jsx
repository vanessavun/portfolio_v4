import React from "react";
import person from "../assets/profilevanessa2.jpg";
import { Fade} from "react-awesome-reveal";


function Hero() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="container flex">
        <div className="hero-content md:flex justify-center">
          <div className="flex flex-col justify-evenly p-4">
            <Fade direction={"left"}>
              <div className="flex flex-col">
              <h2 className=" text-indigo-200 font-semibold font-sans sm:text-lg">
                👋 Hi, my name is
              </h2>
              <h1 className="text-5xl font-bold text-purple-300 pt-4 font-sacramento">
                Vanessa Vun
              </h1>
              </div>
              <p className=" text-indigo-300 font-medium font-sans">
                In the SF Bay Area, I am a Front-End Engineer at SciShield,
                focused on building features to help people work efficiently and for laboratories to stay safe.
              </p>
            </Fade>
          </div>
          <div className="flex justify-center max-w-full h-auto">
            <Fade direction={"right"}>
              <img src={person} className="w-auto h-auto max-w-[400px] min-w-[200px] rounded-full p-4" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
