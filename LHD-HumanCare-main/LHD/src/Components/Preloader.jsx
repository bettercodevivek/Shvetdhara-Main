import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className=" animate-fadeIn transition duration-1000 ease-in-out rounded-full">
        <img className="logo h-56" src="https://i.ibb.co/Nn3db0vV/Shvetdhara-Logo.webp" alt="Loading Logo" />
      </div>
    </div>
  );
};

export default Preloader;