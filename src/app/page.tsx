// import Image from "next/image";
import Main from "./sections/main";
import Navigation from "./sections/navigation";
import Experience from "./sections/experience";
import Skills from "./sections/skills/index";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <Main />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
