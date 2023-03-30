import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm a software engineer with a diverse background. I started out as an electrician and eventually made the transition into tech. In my free time, I enjoy writing poetry and staying fit through boxing. I also have a strong commitment to community service and sit on the board of directors as a young trustee for a non-profit. Fun fact about me - my family hails from Georgetown, Guyana, but I grew up in Brooklyn."
        </p>

        <br />

        <p className="text-xl">
          Check out my portfolio!
        </p>
      </div>
    </div>
  );
};

export default About;