"use client";

const Main = () => {
  return (
    <>
      <div id="main-section" className="main-home-landing-page-section flex justify-center">
        <div className="dark-overlay-left"></div>
        <div className="dark-overlay-right"></div>
        <div className="introduction-text-block text-white text-center flex flex-col justify-center items-center gap-5 px-3 w-11/12 lg:w-2/3">
          <div>
            <p className="text-xs">BASED IN CHICAGO, IL</p>
          </div>
          <div className="intro-text-block flex flex-col gap-1 md:gap-2">
            <p className="text-3xl sm:text-5xl md:text-6xl">
              <span>Software </span>
              <span>Engineer</span>
            </p>
            <p className="text-3xl sm:text-5xl md:text-6xl">
              <span className="text-blue-500">Specializing </span>
              <span className="text-blue-500">In </span>
              <span className="text-blue-500">Full-Stack </span>
              <span className="text-blue-500">Web </span>
              <span>Applications</span>
            </p>
          </div>
          <div>
            <p className="text-gray-400">
              Hi, I&apos;m Danish. I create solutions across all layers of software engineering.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#projects-section"
              className="see-my-work-button relative border border-slate-500 px-4 py-2 rounded overflow-hidden bg-[#222222] bg-opacity-75 hover:bg-opacity-100 cursor-pointer"
            >
              See My Work
            </a>
            <a href="" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>{" "}
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
