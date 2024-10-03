import React from "react";
import logo from "../assets/logo.png";
import logoLarge from "../assets/logo-large.png"
import { FaBars } from "react-icons/fa";
import { navLinks } from "../utils/constants";

const NavbarLinks = ({ setIsSidebarOpen }) => {
  return (
    <nav className="nav-links">
      <div className="nav-links-center section-center">
        <div className="nav-header">
          <div className="logo-header">
            <img src={logo} className ="logo-small" alt="askmeguru logo" />
            <img src={logoLarge} className="logo-large" alt="askmeguru logo" />
          </div>
          <button
            type="button"
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <FaBars />
          </button>
        </div>

        <ul className="nav-links-list">
          {navLinks.map((link) => {
            const { id, label } = link;
            return (
              <li key={id}>
                <a href="#">{label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLinks;
