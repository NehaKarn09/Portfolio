import React from 'react'
import dp from './Images/Neha_Img.jpg'


const Sidebar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 h-90% bg-gray-800 text-white w-64 p-4 mt-32 mx-6 rounded-xl">
      <div className="text-center mb-4 rounded-md mt-20">
        <img
          src={dp}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-xl font-bold">Neha Karn</h1>
        <p className="text-gray-400">Software Developer</p>
      </div>
      <div className="space-y-10">
        <div className="mt-10">
          <h2 className="font-semibold">Email</h2>
          <p className="text-gray-400">nehakarn0904@gmail.com</p>
        </div>
        <div>
          <h2 className="font-semibold">Phone</h2>
          <p className="text-gray-400">+91-7543040903</p>
        </div>
        <div>
          <h2 className="font-semibold">Birthday</h2>
          <p className="text-gray-400">April 09, 2003</p>
        </div>
        <div>
          <h2 className="font-semibold">Location</h2>
          <p className="text-gray-400">Your Location</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;
