import React from "react";
import Assembly from "../assets/Assembly.png"
import GiveAWay from "../assets/Giveaway.png"
import Recikey from "../assets/ReciKey.png"; 


const Portfolio = () => {

  const portfolios = [
      {
        id: 1,
        src: Recikey,
        href: "https://markgiddings202.github.io/Unit-6-Project-ReciKey/",
        github: "https://github.com/MarkGiddings202/Unit-6-Project-ReciKey",
      },
    {
      id: 2,
      src: Assembly,
      href: "https://main--bucolic-lollipop-d5b6c1.netlify.app/",
      github: "https://github.com/Assembly-Capstone-Project",
    },
    {
      id: 3,
      src: GiveAWay,
      href: "https://give-a-way.netlify.app/",
      github: "https://github.com/Give-A-Way",
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 pb-24 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href , github}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={github} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;