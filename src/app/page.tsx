"use client";
// import Image from "next/image";
import Main from "./sections/main";
import Navigation from "./sections/navigation";
import Experience from "./sections/experience";
import Skills from "./sections/skills/index";
import Projects from "./sections/projects";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileNav from "./sections/navigation/mobileNav";

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (isAboveMediumScreens) {
      setNavOpen(false);
      console.log("ABOVE");
    } else {
      console.log("BELOW");
    }
  }, [isAboveMediumScreens]);

  return (
    <>
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen ? (
        <MobileNav />
      ) : (
        <>
          <Main />
          <Experience />
          <Skills />
          <Projects />
        </>
      )}
    </>
  );
}
