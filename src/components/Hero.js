import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="hero">
      <div className="section-center hero-center">
        <article>
          <h3>who are we </h3>
        </article>
        <ul className="hero-links">
          <li>
          <IoHome />
            <a href="#">home</a>
          </li>
          <li>
          <IoIosArrowDroprightCircle />
            <a href="#">about us</a>
          </li>
        </ul>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
