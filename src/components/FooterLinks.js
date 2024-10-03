import React from "react";
import { footerIcons, footerLinks1 } from "../utils/constants";

import logo from "../assets/logo-large.png";

const FooterLinks = () => {
  return (
    <footer className="footer-links">
      <div className="footer-links-center section-center">
        <div>
          <img src={logo} alt="logo" />
          <p>
            Software constraints are only confining if you use them for what
            they're intended to be used for.
          </p>
          <ul className="footer-icons-list">
            {footerIcons.map((icon) => (
              <li key={icon.id}>
                <a
                  href={icon.url}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>featured cities</h4>
          <ul className="footer-links-list">
            {footerLinks1.map((link) => {
              return (
                <li className="link" key={link.id}>
                  <a href="#">
                    <span>&gt; &nbsp;</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul>
            <h4>our newsletter</h4>
            <li>
              <input type="text" placeholder="Enter your email address" />
            </li>
            <li>
              <button className="btn">subscribe</button>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};

export default FooterLinks;
