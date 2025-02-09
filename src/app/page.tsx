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
  const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (isAboveMediumScreens) {
      setNavOpen(false);
    }
  }, [isAboveMediumScreens]);

  return (
    <>
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      {navOpen ? (
        <MobileNav setNavOpen={setNavOpen} />
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
