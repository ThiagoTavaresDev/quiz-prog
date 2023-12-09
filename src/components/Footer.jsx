import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className=" fixed bottom-0 w-full h-[80px] bg-gray-700  flex justify-center items-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-6">
          <a
            href="https://github.com/ThiagoTavaresDev"
            target="_blank"
            rel="noreferrer"
            className="border-[1px] border-transparent px-2 py-1 hover:border-blue-300 transition rounded-sm"
          >
            <FaGithub size={28} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-tavares-b6570b263/"
            target="_blank"
            rel="noreferrer"
            className="border-[1px] border-transparent px-2 hover:border-blue-300 transition py-1 rounded-sm"
          >
            <FaLinkedin size={28} color="white" />
          </a>
          <a
            href="https://www.youtube.com/@DevTh-zd1ej"
            target="_blank"
            rel="noreferrer"
            className="border-[1px] border-transparent px-2 hover:border-blue-300  py-1 rounded-sm"
          >
            <FaYoutube size={28} color="white"/>
          </a>
        </div>
        <p className="text-gray-100 font-bold">
          Criado e desenvolvido por{" "}
          <span className="text-blue-300  loader">
            <a
              href="https://github.com/ThiagoTavaresDev"
              target="_blank"
              rel="noreferrer"
              
            >
              @ThiagoTavaresDev
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
