import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./index.css";
import React, { useState } from "react";
import Top from "./feature/top";
import AboutMe from "./feature/aboutMe";
import Skill from "./feature/skill";
import Project from "./feature/project";
// import Contact from "./feature/contact";
import Footer from "./feature/footer";
import upArrow from "./images/up-arrow.png";
import { FaAngleUp } from "react-icons/fa";
function App() {
  const [visible, SetVisible] = useState(false);

  const scrollToggle = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled < 300) {
      SetVisible(false);
    } else if (scrolled >= 300) {
      SetVisible(true);
    }
  };
  window.addEventListener("scroll", scrollToggle);

  const ScrollToTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="">
      <div
        className="relative"
        onClick={ScrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <img
          className="fixed z-10 w-10 h-10 bottom-5 right-5"
          src={upArrow}
        ></img>
        {/* <FaAngleUp className="icon-position icon-style" /> */}
      </div>
      {/* <article> tag는 문서 혹은 요소가 독립적으로 존재할 수 있을 때 사용한다. */}
      <Top />
      <AboutMe />
      <Skill />
      <Project />
      {/* <Contact /> */}
      <Footer />
    </article>
  );
}

export default App;
