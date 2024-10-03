import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/logo-large.png";

import { sidebarLinks } from "../utils/constants";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt="askmeguru logo" />
        <button
          type="button"
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        >
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar-links">
        {sidebarLinks.map((link) => {
          const { id, label } = link;
          return (
            <li key={id}>
              <a
                href="#"
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
