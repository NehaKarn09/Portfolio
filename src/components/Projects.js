import React from 'react';
import weatherApp from './Images/weatherApp.png'
import RIOS from './Images/RIOS.png'
import iNotebook from './Images/iNotebook.png'
import newsApp from './Images/newsApp.png'
import textsculpt from './Images/textsculpt.png'
import Health_check_tool from './Images/Health_check_tool.png'

const projects = [
  {
    title: "Weather Website",
    image: weatherApp,
    link: "https://github.com/NehaKarn09/weatherapp",

  },
  {
    title: "RIOS",
    image: RIOS,
    link: "https://github.com/NehaKarn09/RIOS",
  },
  {
    title: "iNotebook",
    image: iNotebook,
    link: "https://github.com/NehaKarn09/iNotebook",
  },
  {
    title: "News App",
    image: newsApp,
    link: "https://github.com/NehaKarn09/newsapp",
  },
  {
    title: "Text Sculpt",
    image: textsculpt,
    link: "https://github.com/NehaKarn09/TextUtils-React",
  },
  {
    title: "Anemia Detection Tool",
    image: Health_check_tool,
    link: "https://github.com/NehaKarn09/Health_Check_Tool",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-800 text-white p-16 ml-80 mt-16 mb-20 rounded-xl">
      {projects.map((project, index) => (
        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;