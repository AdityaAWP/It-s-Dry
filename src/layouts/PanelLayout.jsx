import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../template/Footer";

const PanelLayout = () => {
  const navLinks = [
    { name: "Dashboard", path: "/article-panel" },
    { name: "Article Data", path: "/article-panel/data" },
    { name: "Home", path: "/" },
  ];
  return (
    <div className="flex min-h-screen font-condensed tracking-wide font-bold ">
      <div className="bg-primary px-10 flex flex-col justify-center ">
        <h1 className="bg-second px-5 py-2 rounded-md text-xl">
          Article Panel
        </h1>
        <ul>
          {navLinks.map((item, key) => (
            <Link to={item.path} key={key}>
              <li className="bg-accent my-3 px-3 py-2 rounded-lg text-white">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bg-second text-white flex-grow">
        <header className="flex items-center bg-accent py-3 justify-around">
          <h1 className="text-2xl">Hello User</h1>
          <button className="bg-red-800  px-3 py-2 rounded">Logout</button>
        </header>
        <main className=" text-black h-5/6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PanelLayout;
