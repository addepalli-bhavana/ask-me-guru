import React, { useEffect, useState } from "react";

const Stats = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const interval = 4000;
    const handleUpdateStats = (target, endValue) => {
      let startValue = 0;
      const duration = Math.floor(interval / endValue);
      const timer = setInterval(() => {
        startValue += 1;
        target(startValue);
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, duration);
    };
    handleUpdateStats(setHappyCustomers, 600);
    handleUpdateStats(setSatisfiedCustomers, 100);
    handleUpdateStats(setTotalProjects, 350);
    handleUpdateStats(setYearsOfExperience, 7);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="stats">
      <div className="stats-center section-center">
      <article className="stat">
        <h4>{happyCustomers}+</h4>
        <p>happy customers</p>
      </article>
      <article className="stat">
        <h4>{satisfiedCustomers}%</h4>
        <p>satisfied customers</p>
      </article>
      <article className="stat">
        <h4>{totalProjects}+</h4>
        <p>total projects</p>
      </article>
      <article className="stat">
        <h4>{yearsOfExperience}+</h4>
        <p>years of exp</p>
      </article>
    </div>
    </section>

  );
};

export default Stats;
