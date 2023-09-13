import { Link } from "gatsby";
import { globalHistory } from "@reach/router";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = React.useState(false);
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects/" },
    { label: "About", to: "/about/" },
    { label: "Contact", to: "/contact/" },
  ];
  const pathname = globalHistory.location.pathname;

  return (
    <nav className="flex justify-between items-center my-0 mx-auto p-7 bg-black text-white">
      <h1>JPatino</h1>

      {/*Links on Desktop*/}
      <ul role="presentation" className=" md:flex justify-between gap-3 hidden">
        {navLinks.map((link) => (
          <li
            key={link.label}
            role="presentation"
            className={`hover:scale-105 duration-200 hover:underline ${
              pathname === link.to ? "text-red-600" : " "
            }`}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/*Burger Menu*/}
      <button
        onClick={() => setNav(!nav)}
        onKeyDown={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-300 md:hidden border-red-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/*Mobile Menu*/}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {navLinks.map((link) => (
            <li
              key={link.label}
              role="presentation"
              className={`px-4 cursor-pointer capitalize mb-3 text-3xl ${
                pathname === link.to ? "text-red-600" : " "
              }`}
            >
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
