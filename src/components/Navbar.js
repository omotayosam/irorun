//import ReactDom from "react-dom";
import React from "react";
//import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../images/Group.png";
const Navbar = () => {
  return (
    <nav>
      <div className="px-7 mx-auto">
        <div className="flex justify-start space-x-60 py-3">
          <div className="logo px-8">
            <img className="h-9 w-17" src={logo} alt="{logo}" />
          </div>

          <div className="hidden md:flex primary-nav flex items-center space-x-3">
            <a href="." className=" hover:text-blue">
              Home
            </a>
            <a href="." className=" hover:text-blue">
              Contact
            </a>
            <a href="." className="hover:text-blue">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
