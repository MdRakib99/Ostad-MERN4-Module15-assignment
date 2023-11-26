import React from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div className='pb-9'>
      <div className='navbar  bg-neutral text-white gap-5'>
        <button className='btn btn-ghost text-2xl'>Student Addmission</button>
        <NavLink className='text-neutral-content font-bold' to='/'>
          Students List
        </NavLink>
        <NavLink className='text-neutral-content font-bold' to='/save'>
          Registration
        </NavLink>
      </div>
    </div>
  );
};

export default AppNavbar;
