// import React from 'react';
// import myPhoto from '../images/photo3.jpeg';
// import ButtonComponent from './ButtonComponent';

// function HomePage() {
//   const pdfUrl = 'https://drive.google.com/file/d/1qatWQ3LCDo_k7A4mTsbv65HOSlZHtxTK/view?usp=drive_link';

//   const handleClick = () => {
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <div className="flex flex-col-reverse lg:flex-row h-screen bg-gray-900">
//       {/* Text Container */}
//       <div className="flex flex-col justify-center items-center lg:items-start flex-1 p-8 lg:pl-24 lg:pt-6 text-center lg:text-left">
//         <h1 className="font-sans text-3xl lg:text-5xl text-white font-bold leading-tight mb-2">Hi, I am</h1>
//         <h1 className="font-sans text-3xl lg:text-5xl text-white font-bold leading-tight mb-2">Supriya Samant</h1>
//         <p className="mt-2 text-base lg:text-xl text-gray-400 lg:pr-16 leading-relaxed mb-8">
//           I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
//         </p>
//         <ButtonComponent onClick={handleClick} label="Check Resume" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-xl font-bold mb-4" />
//       </div>

//       {/* Image Container */}
//       <div className="flex justify-center items-center flex-1 relative pt-16 lg:pt-0 ">
//         <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-indigo-500 rounded-full animate-pulse opacity-50"></div>
//         <img src={myPhoto} alt="My Image" className="relative w-64 h-64 lg:w-80 lg:h-80  rounded-full object-cover border-4 border-indigo-500" />
//       </div>
//     </div>
//   );
// }

// export default HomePage;
import React from 'react';
import myPhoto from '../images/photo3.jpeg';
import ButtonComponent from './ButtonComponent';

function HomePage() {
  const pdfUrl = 'https://drive.google.com/file/d/1qatWQ3LCDo_k7A4mTsbv65HOSlZHtxTK/view?usp=drive_link';

  const handleClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen lg:h-screen bg-gray-900">
      {/* Text Container */}
      <div className="flex flex-col justify-center items-center lg:items-start flex-1 p-8 lg:pl-24 lg:pt-6 text-center lg:text-left">
        <h1 className="font-sans text-3xl lg:text-6xl text-white font-bold leading-tight mb-2">Hi, I am</h1>
        <h1 className="font-sans text-3xl lg:text-6xl text-white font-bold leading-tight mb-2">Supriya Samant</h1>
        <p className="mt-2 text-base lg:text-xl text-gray-400 lg:pr-16 leading-relaxed mb-8">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        <ButtonComponent onClick={handleClick} label="Check Resume" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white  py-4 rounded-lg text-lg font-bold mb-8" />
      </div>

      {/* Image Container */}
      <div className="flex justify-center items-center flex-1 relative pt-32 lg:pt-0">
        <div className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-indigo-500 rounded-full animate-pulse opacity-50"></div>
        <img src={myPhoto} alt="My Image" className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-indigo-500" />
      </div>
    </div>
  );
}

export default HomePage;
