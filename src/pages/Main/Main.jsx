import React from "react";
import "./Main.css";
import Schedule from "../Schedule/Schedule";
import Trend from "../Trend/Trend";
import Blog from "../Blog/Blog";

const Main = () => {
  return (
    <main>
      <Schedule />
      <Trend />
      <Blog />
    </main>
  );
};

export default Main;
