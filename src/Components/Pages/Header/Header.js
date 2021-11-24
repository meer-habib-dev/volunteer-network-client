import "./Header.css";
import React from "react";
import HeaderBody from "./HeaderBody";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="Overlay">
        <div>
          <HeaderBody></HeaderBody>
          <div className="flex flex-col justify-center my-16">
            <p className="text-5xl text-center font-bold">
              I grow by helping people in need.
            </p>
            <div className="search-field w-50 my-10 mx-auto ">
              <input
                className="py-2 px-2"
                placeholder="Search Here"
                type="text"
              />
              <button className="py-2 px-6 bg-blue-700 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
