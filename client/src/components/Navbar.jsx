import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-purple-900/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-2xl font-bold text-white tracking-tight">
          Developer
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-purple-400 transition-colors cursor-pointer">About</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">Projects</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">Skills</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">Experience</li>
          <li className="hover:text-purple-400 transition-colors cursor-pointer">Contact</li>
        </ul>
        <button className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
