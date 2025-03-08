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
import Link from "next/link";
import Footer from "./sections/footer";

export default function Home() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 767px)");
  const [navOpen, setNavOpen] = useState(false);
  const [showingResumeModal, setShowingResumeModal] = useState(false);
  const [showingResumeFullScreen, setShowingResumeFullScreen] = useState(false);
  const [showingSecondProjectsView, setShowingSecondProjectsView] = useState(false);

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
            <MobileNav
              setNavOpen={setNavOpen}
              showingSecondProjectsView={showingSecondProjectsView}
            />
          ) : (
            // all components showing
            <>
              <Main
                setShowingResumeModal={setShowingResumeModal}
                showingSecondProjectsView={showingSecondProjectsView}
              />
              {/* resume shows when "View Resume" button is clicked */}
              {showingResumeModal && (
                <ResumeModal
                  setShowingResumeModal={setShowingResumeModal}
                  setShowingResumeFullScreen={setShowingResumeFullScreen}
                />
              )}
              <Experience />
              <About />
              <Skills />
              {!showingSecondProjectsView && <Projects />}
              {!showingSecondProjectsView ? (
                <div className="flex justify-center items-center pb-10 text-center">
                  <a
                    href="#ProjectsCarousel"
                    className="border border-slate-500 px-4 py-2 rounded overflow-hidden bg-[#222222] bg-opacity-75 hover:bg-opacity-100 cursor-pointer"
                    onClick={() => [setShowingSecondProjectsView(!showingSecondProjectsView)]}
                  >
                    Toggle View
                  </a>
                </div>
              ) : (
                <div
                  className="flex justify-between items-center py-16 w-11/12 mx-auto"
                  id="ProjectsCarousel"
                >
                  <p className="text-3xl sm:text-5xl md:text-6xl">Projects</p>
                  <Link
                    href="#projects-section"
                    className="border border-slate-500 px-4 py-2 rounded overflow-hidden bg-[#222222] bg-opacity-75 hover:bg-opacity-100 cursor-pointer"
                    onClick={() => [setShowingSecondProjectsView(!showingSecondProjectsView)]}
                  >
                    Toggle View
                  </Link>
                </div>
              )}
              {showingSecondProjectsView && <ProjectsCarousel />}
              <Footer />
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
