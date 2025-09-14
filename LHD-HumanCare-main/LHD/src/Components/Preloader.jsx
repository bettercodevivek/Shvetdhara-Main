import React from 'react';
import './Preloader.css'; 

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className=" animate-fadeIn transition duration-1000 ease-in-out rounded-full">
        <img className="logo" src="https://i.ibb.co/hxVY6QnM/SHVETDHARA-LOGO-FINAL-v12-page-0001-removebg-preview.png" alt="Loading Logo" />
      </div>
    </div>
  );
};

export default Preloader;
