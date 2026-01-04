import image from "../assets/images/maxim.jpg";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({projectTitle, description, tools, live, github}) {
  return (
    <div className="w-full min-h-100 border border-blue-600/20 overflow-hidden rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 dark:bg-slate-800 transition duration-300">
      <div className="w-full">
        <img src={image} alt="maxim" className="w-full"/>
      </div>
      <div className="p-5 max-lg:p-3">
        <div>
          <h3 className="text-2xl font-semibold text-indigo-500">{projectTitle}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {tools?.map((tool) => (
            <span key={tool} className="py-1 px-2 text-xs rounded-full text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-slate-700">{tool}</span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a 
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2 px-3 rounded-lg flex items-center gap-2 justify-center font-semibold text-white bg-linear-65 from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition duration-700"
          >
            <FaEye/>
            Live Demo
          </a>
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2 px-3 rounded-lg flex items-center gap-2 justify-center font-semibold text-white bg-slate-800 hover:bg-slate-700 dark:text-slate-700 dark:bg-slate-300 dark:hover:bg-slate-200 transition duration-700"
          >
            <FaGithub/>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}