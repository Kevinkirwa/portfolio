import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  //FaReact,
  FaGithub,
} from "react-icons/fa";
//import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Wordpress developer.", "Full Stack Developer.", "Content editor."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO WHAT I LOVE DOING</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">kevin kirwa</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
         I am passionate and skilled full-stack developer with expertise in modern web technologies, including React, JavaScript, and CSS. With multiple certifications from Udemy in areas like Agile Project Management, Full Stack Development, and UX Design, Kevin is dedicated to creating seamless user experiences and robust applications. His journey blends technical know-how with a drive for continuous learning, always looking for ways to stay ahead in the rapidly evolving tech landscape.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Kevinkirwa" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.facebook.com/kevin.kirwa.775" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/KirwaKipngeno" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/kevin-kirwa-9a7242258" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        {/*<div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default LeftBanner;
