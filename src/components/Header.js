import React from "react";
import askmeguru from "../assets/hero.png";


const Header = () => {
 
  return (
    <header className="section-center header-center">
      <img src={askmeguru} alt="askmeguru" />
      <article>
        <h2>Leading Software Development Company In Hyderabad, India.</h2>
        <p>
          ASKMEGURU TECHNOLOGIES is the leading digital platform for all
          business firms across the world and an one stop automated solution for
          your trade and industry. ASKMEGURU TECHNOLOGIES began its business
          operation in bulk SMS and Digital Marketing solutions providing
          company in December 2013. On the public interest we have done our
          platform into all over Telangana state focusing exclusively in high
          quality and cost-effective software development and implementation of
          services.
        </p>
      </article>
    </header>
  );
};

export default Header;
