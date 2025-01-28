
import React from 'react';
import {projects} from './constants/index.js'

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white hover:text-gray-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
