// import React from 'react';

// // Import logos
// import sit from '../images/sit.png'; // Add the correct path for your logos
//  // Add the correct path for your logos
// import sai from '../images/sai.jpeg'; // Add the correct path for your logos

// // Education data
// const education = [
//   {
//     institution: "Sharad Institute Of Technology College Of Engineering, Ichalkaranji (Kolhapur)",
//     logo: sit,
//     degree: "BTECH in Computer Science and Engineering",
//     duration: "2022 - 2025",
//     details: "CGPA: 9.4/10\nI completed my Higher Education (B-Tech CSE) at SITCOE, where I studied Computer Science and Engineering.",
//   },
//   {
//     institution: "Sharad Institute Of Technology Polytechnic, Yadrav",
//     logo: sit,
//     degree: "Diploma in Information Technology",
//     duration: "2019 - 2022",
//     details: "Aggregate: 89.60%\nI completed my diploma at SIT Polytechnic, where I studied Information Technology Engineering.",
//   },
//   {
//     institution: "Sai English High School",
//     logo: sai,
//     degree: "SSC(10th)",
//     duration: "2008 - 2018",
//     details: "Percentage: 92.60%\nI Have completed my SSC (10th) at Sai English High School which is located at Ichalkaranji, Kolhapur.",
//   },
// ];

// function Education() {
//   return (
//     <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900">
//       <h1 className="text-5xl font-bold mb-4 text-white">Education</h1>
//       <h2 className="text-2xl mb-8 text-white">Here is my educational background</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {education.map((edu, index) => (
//           <div 
//             key={index} 
//             className="flex flex-col items-center p-4 border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white text-gray-800"
//           >
//             <img src={edu.logo} alt={`${edu.institution} logo`} className="w-16 h-16 mb-4" />
//             <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
//             <p className="text-md font-semibold mb-2">{edu.degree}</p>
//             <p className="text-md mb-2">{edu.duration}</p>
//             <p className="text-sm text-gray-600 text-center">{edu.details}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Education;
import React from 'react';

// Import logos
import sit from '../images/sit.png'; // Add the correct path for your logos
//  // Add the correct path for your logos
import sai from '../images/sai.jpeg'; // Add the correct path for your logos

// Education data
const education = [
  {
    institution: "Sharad Institute Of Technology College Of Engineering, Ichalkaranji (Kolhapur)",
    logo: sit,
    degree: "BTECH in Computer Science and Engineering",
    duration: "2022 - 2025",
    marks:"CGPA: 9.4/10",
    details: "I completed my Higher Education (B-Tech CSE) at SITCOE, where I studied Computer Science and Engineering.",
  },
  {
    institution: "Sharad Institute Of Technology Polytechnic, Yadrav",
    logo: sit,
    degree: "Diploma in Information Technology",
    duration: "2019 - 2022",
    marks: "Aggregate: 89.60%",
    details: "I completed my diploma at SIT Polytechnic, where I studied Information Technology Engineering.",
  },
  {
    institution: "Sai English High School",
    logo: sai,
    degree: "SSC(10th)",
    duration: "2008 - 2018",
    marks: "Percentage: 92.60%",
    details: "I Have completed my SSC (10th) at Sai English High School which is located at Ichalkaranji, Kolhapur.",
  },
];

function Education() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900">
      <h1 className="text-5xl font-bold mb-4 text-white">Education</h1>
      <h2 className="text-xl mb-8 text-white">Here is my educational background</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 border border-gray-400 rounded-xl shadow-md hover:shadow-lg transition-shadow transition-transform duration-300 transform hover:scale-105 duration-300 bg-gray-900 text-gray-800"
          >
            <img src={edu.logo} alt={`${edu.institution} logo`} className="w-16 h-16 mr-4 rounded-lg" />
            <div>
              <h3 className="text-xl text-gray-400 font-bold mb-2">{edu.institution}</h3>
              <p className="text-md text-gray-400 font-semibold mb-2">{edu.degree}</p>
              <p className="text-md text-gray-400 mb-2">{edu.duration}</p>
              <p className="text-sm text-gray-400">{edu.marks}</p>
              <p className="text-sm text-gray-400">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
