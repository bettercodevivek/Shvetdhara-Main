import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className=" animate-fadeIn transition duration-1000 ease-in-out rounded-full">
        <img className="logo" src="https://i.ibb.co/XZC6T0qR/Shvetdhara-Logo.png" alt="Loading Logo" />
      </div>
    </div>
  );
};

export default Preloader;
