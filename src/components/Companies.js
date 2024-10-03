import React from "react";
import { companyLogos } from "../utils/constants";

const Companies = () => {
  return (
    <section className=" section-center companies">
      <h3>our clients</h3>
      <p>Some of our clients taken software solution from us</p>
      <div className="companies-list">
        <div className="companies-list-slide">
          {companyLogos.map((company) => {
            return (
              <img src={company.source} key={company.id} alt="company logo" />
            );
          })}
        </div>
        <div className="companies-list-slide">
          {companyLogos.map((company) => {
            return (
              <img src={company.source} key={company.id} alt="company logo" />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Companies;
