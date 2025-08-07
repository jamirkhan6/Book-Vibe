import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Components/Navigation.css'

const Navigation = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-32 mt-12">
        <div className="text-2xl font-bold">Book Vibe</div>
        <div>
          <ul className="flex items-center justify-between gap-4">
            <NavLink to='/'><li className="px-5 py-2">Home</li></NavLink>
            <NavLink to='/listedBook'><li className="px-5 py-2">Listed Books</li></NavLink>
            <NavLink to='/pagesToRead'><li className="px-5 py-2">Pages to Read</li></NavLink>
          </ul>
        </div>
        <div className="flex gap-4">
          <button className="px-7 py-3 font-medium text-white rounded-xl bg-[#23BE0A]">Sign In</button>
          <button className="px-7 py-3 font-medium text-white rounded-xl bg-[#59C6D2]">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Navigation
