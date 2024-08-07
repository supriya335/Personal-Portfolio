import React from 'react';
import ProjectCard from './ProjectCard';
import DR from '../images/dr.png'; 
import StudySync from '../images/studysync.png';
import fileed from '../images/fileed.png'; 

const projects = [
  {
    image: DR,
    tags: ['React JS', 'CSS', 'MySQL', 'Flask API', 'Python'],
    title: 'Screening and Early Detection of Diabetic Reninopathy',
    date: 'Feb 2024 - July 2024',
    description: 'Developed a Machine Learning Model which detects the stages diabetic retinopathy using retina images.',
    githubLink: 'https://github.com/yourusername/liver-disease-prediction',
   
  },
  {
    image: fileed,
    tags: ['HTML', 'CSS', 'JavaScript', 'Python','Flask API'],
    title: 'FIle Encryption and Decryption',
    date: 'Dec 2023',
    description: 'FIle Encryption and Decryption tool is used to encrypt and decrypt different types of files.',
    githubLink: 'https://github.com/yourusername/weather-forecaster',
   
  },
  {
    
    image: StudySync,
    tags: ['HTML', 'CSS'],
    title: 'StudySync Website',
    date: 'Sep 2023',
    description: 'It is simple frontend project of Learning management system.',
    githubLink: 'https://github.com/yourusername/mit-pedia',
 
  },
];

function Projects() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900">
    <h1 className="text-5xl font-bold mb-4 text-white">Projects</h1>
    <h2 className="text-2xl mb-8 text-white">Here are some Projects I have implemented....</h2>
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          tags={project.tags}
          title={project.title}
          date={project.date}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
    </div>
   
  );
}

export default Projects;
