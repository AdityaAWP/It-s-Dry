import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="flex justify-between items-center md:mx-20 mx-10 mt-3 mb-5">
        <div className="logo flex items-center">
          <img className="w-14" src={Logo} alt="" />
          <p className="font-bold text-2xl underline font-jersey">It's Dry</p>
        </div>
        <nav className="flex items-center">
          <ul className="md:flex hidden gap-8">
            {navItems.map((item, key) => (
              <li className="text-xl font-semibold hover:bg-slate-400 px-2 py-1 rounded italic" key={key}>{item.name}</li>
            ))}
          </ul>
          <div className="md:hidden">
            <button onClick={handleClick}>
              {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white mt-2">
          <hr />
          <ul className="block gap-8">
            {navItems.map((item, key) => (
              <li className="hover:bg-slate-400 w-screen text-center" key={key}>{item.name}</li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
