import React from 'react';

// Import logos
import igapLogo from '../images/igap.png'; 
import sparkLogo from '../images/spark.png'; 
import stormsoftsLogo from '../images/stormsofts.jpeg'; 

// Experience data
const experiences = [
  {
    company: "IGAP Technologies Private Limited, Kolhapur",
    logo: igapLogo,
    position: "Web Development – Internship",
    duration: "Dec’23 - Jan’23",
    description: "Successfully implemented Shoe Website Designing using React JS",
  },
  {
    company: "SPaRK IT Developers, Ichalkaranji",
    logo: sparkLogo,
    position: "Data Science – Internship",
    duration: "Jan’23 - Feb’23",
    description: "Gained hands-on experience in applying statistical analysis to real-world problems.",
  },
  {
    company: "Stormsofts Technology, Ichalkaranji",
    logo: stormsoftsLogo,
    position: "Web Development – Internship",
    duration: "Aug’21 - Sep’21",
    description: "Developed Salon Website using HTML, CSS, JavaScript and PHP.",
  },
];

function Experience() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900">
      <h1 className="text-5xl font-bold mb-4 text-white">Experience</h1>
      <h2 className="text-xl mb-8 text-white">Here is some of my professional experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start p-4 border border-indigo-500 rounded-xl shadow-xl text-gray-900 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-2">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl text-gray-400 font-bold">{exp.company}</h3>
                <p className="italic text-gray-400 ">{exp.position} <span className="text-gray-400">({exp.duration})</span></p>
              </div>
            </div>
            <p className="mt-2 text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
