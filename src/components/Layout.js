import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />

      <div className="text-blue-600">{children}</div>

      <footer className="text-gray-400 bg-black p-4 text-center absolute bottom-0 w-full">
        <p>Copyright 2023 Jose Patino</p>
      </footer>
    </div>
  );
}
