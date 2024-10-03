import React, { useState } from "react";
import NavbarLinks from "./components/NavbarLinks";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Companies from "./components/Companies";
import FooterLinks from "./components/FooterLinks";
import FooterText from "./components/FooterText";

const App = () => {
  let [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <NavbarLinks setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <main>
        <Hero />
        <Header />
        <Stats />
        <Companies />
        <FooterLinks />
        <FooterText />
      </main>
    </>
  );
};

export default App;
