import { Link } from "gatsby";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = React.useState(true);
  console.log(nav);

  return (
    <nav className="flex justify-between items-center my-0 mx-auto p-7 bg-black text-white">
      <h1>JPatino</h1>

      <div className="md:flex justify-between gap-3 hidden">
        <Link
          className="hover:scale-105 duration-200 hover:text-red-600"
          to="/"
        >
          Home
        </Link>

        <Link
          className="hover:scale-105 duration-200 hover:text-red-600"
          to="/projects"
        >
          Projects
        </Link>

        <Link
          className="hover:scale-105 duration-200 hover:text-red-600"
          to="/about"
        >
          About
        </Link>

        <Link
          className="hover:scale-105 duration-200 hover:text-red-600"
          to="/contact"
        >
          Contact
        </Link>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
    </nav>
  );
}
