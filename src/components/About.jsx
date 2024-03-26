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
        I'm a Software Engineer, teacher, and poet. My family is from Georgetown, Guyana, and I was raised in Brooklyn, New York. Some of my hobbies include going for long walks, reading, and exploring NYC when I can. I really aspire to leverage my skills and expertise to make a meaningful impact within a dynamic tech company. I'm particularly drawn to organizations that prioritize collaboration, diversity, and social responsibility. My commitment to continuous learning and adaptability fuels my drive to excel in this ever-evolving field. Outside of work, I'm deeply rooted in values of integrity, empathy, and community, values instilled in me from my upbringing and The Marcy Lab School.
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