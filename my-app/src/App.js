import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "./index.css";
import Top from "./feature/top";
import AboutMe from "./feature/aboutMe";
import Skill from "./feature/skill";
import Project from "./feature/project";
import Contact from "./feature/contact";
import Footer from "./feature/footer";
function App() {
  return (
    <article className="">
      {/* <article> tag는 문서 혹은 요소가 독립적으로 존재할 수 있을 때 사용한다. */}

      <Top />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </article>
  );
}

export default App;
