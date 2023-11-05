
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-black-800 h-screen w-64 fixed top-0 left-0 p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="text-black hover:text-gray-300">Dashboard</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-black hover:text-gray-300">Products</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-black hover:text-gray-300">Orders</a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-black hover:text-gray-300">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;