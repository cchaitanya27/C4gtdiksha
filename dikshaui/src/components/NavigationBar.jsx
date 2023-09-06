import React from "react";

const NavigationBar = () => {
  return (
    <div className="overlap">
      <img className="img" alt="Group" src="group1-1.png" />
      <div className="group-2">
        <img className="home-svgrepo-com" alt="Home svgrepo com" src="home-svgrepo-com.svg" />
        <div className="text-wrapper-5">Home</div>
      </div>
      <div className="div-wrapper">
        <div className="overlap-2">
          <img className="profile-svgrepo-com" alt="Profile svgrepo com" src="profile-svgrepo-com.svg" />
          <div className="text-wrapper-6">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
