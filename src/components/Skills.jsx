import React from 'react';

// Import logos
import javaLogo from '../images/java.png';
import oopLogo from '../images/oop.png';
import dsLogo from '../images/ds.png';
import dbmsLogo from '../images/db.png';
import mysqlLogo from '../images/mysql.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.webp';
import reactLogo from '../images/react.svg';
import apiLogo from '../images/api.png';
import gitLogo from '../images/git.svg';
import githubLogo from '../images/gitHub.png';
import cpp from '../images/cpp.png';

// Skills data
const skills = [
  { name: "Java", logo: javaLogo },
  { name: "OOP", logo: oopLogo },
  { name: "Data Structure", logo: dsLogo },
  { name: "DBMS", logo: dbmsLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "React-JS", logo: reactLogo },
  { name: "Restful API", logo: apiLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "CPP", logo: cpp }
];

function Skills() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900">
      <h1 className="text-5xl font-bold mb-4 text-white">Skills</h1>
      <h2 className="text-2xl mb-8 text-white">Here are some of my skills.....</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 border-2 border-gray-400 rounded-xl"
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
