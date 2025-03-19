import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full justify-center flex border-b  border-gray-800 pt-2 pb-4 mb-7 ">
      <div className="flex flex-row gap-4 justify-around w-1/2 text-2xl text-white">
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? "rounded-md px-4 py-0.5 hover-bg-gray-800 focus:ring-2 focus:ring-gray-600 text-gray-200 border-b-2 border-gray-700 bg-gray-900"
                : "bg-none"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? "rounded-md px-4 py-0.5 hover-bg-gray-800 focus:ring-2 focus:ring-gray-600 text-gray-200 border-b-2 border-gray-700 bg-gray-900"
                : "bg-none"
            }`
          }
          to="/pastes"
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
