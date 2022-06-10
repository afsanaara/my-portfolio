import React from "react";
import Projects from "../../Projects/Projects";
import Banner from "./Banner";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default Home;
