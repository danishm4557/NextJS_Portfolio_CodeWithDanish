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
import About from "./sections/about";
import ResumeModal from "./sections/resume/modal";
import ResumePage from "./sections/resume/page";
import ProjectsCarousel from "./sections/projectsCarousel";

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");
  const [navOpen, setNavOpen] = useState(false);
  const [showingResumeModal, setShowingResumeModal] = useState(false);
  const [showingResumeFullScreen, setShowingResumeFullScreen] = useState(false);

  useEffect(() => {
    if (isAboveMediumScreens) {
      setNavOpen(false);
    }
  }, [isAboveMediumScreens, showingResumeModal]);

  return (
    <>
      {/* all componenets showing */}
      {!showingResumeFullScreen ? (
        <>
          <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
          {/* only mobile nav showing */}
          {navOpen ? (
            <MobileNav setNavOpen={setNavOpen} />
          ) : (
            // all components showing
            <>
              <Main setShowingResumeModal={setShowingResumeModal} />
              {showingResumeModal && (
                <ResumeModal
                  setShowingResumeModal={setShowingResumeModal}
                  setShowingResumeFullScreen={setShowingResumeFullScreen}
                />
              )}
              <Experience />
              <About />
              <Skills />
              <Projects />
              <ProjectsCarousel />
            </>
          )}
        </>
      ) : (
        // only resume showing
        <ResumePage
          setShowingResumeModal={setShowingResumeModal}
          setShowingResumeFullScreen={setShowingResumeFullScreen}
        />
      )}
    </>
  );
}
