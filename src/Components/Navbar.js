import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Blog",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="nav-container flex justify-content-center align-items-center">
      <div className="nav-start flex justify-content-around align-items-center">
        <div>
          <h1 className="logo cursor-pointer ">ABCD</h1>
        </div>
        <ul className="nav-link flex gap-4 ml-auto ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-link-item cursor-pointer text-black-600 transition-duration-200"
            >
              {" "}
              {link}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="hamburger cursor-pointer ml-auto z-5"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <div>
          {nav && (
            <ul className="bar-icon flex flex-column justify-content-center align-items-center absolute  row-gap-3">
              {links.map(({ id, link }) => (
                <li key={id} className="bar-icon-li flex cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
