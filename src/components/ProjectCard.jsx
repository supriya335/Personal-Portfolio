import React from 'react';

function ProjectCard({ image, tags, title, date, description, githubLink, liveLink }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:shadow-lg transition-shadow transition-transform duration-300 transform hover:scale-105 duration-300 bg-gray-900 text-gray-800">
      <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
      <div className="py-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map(tag => (
            <span key={tag} className="bg-purple-700 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <p className="text-sm mb-4">{description}</p>
        <div className="flex justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bg-purple-700 text-white py-1 px-4 rounded-lg hover:bg-purple-600 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
