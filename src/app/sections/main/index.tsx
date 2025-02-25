"use client";
import Image from "next/image";
import cursorProfile from "../../assets/cursor-profile.svg";

type Props = {
  setShowingResumeModal: (value: boolean) => void;
};

const Main = ({ setShowingResumeModal }: Props) => {
  return (
    <>
      <div id="main-section" className="main-home-landing-page-section flex justify-center">
        <div className="dark-overlay-left"></div>
        <div className="dark-overlay-right"></div>
        <div className="introduction-text-block text-white text-center flex flex-col justify-center items-center gap-5 px-3 w-11/12 lg:w-2/3">
          <Image
            src={cursorProfile}
            alt="testing"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 profile-pic-image"
          />
          <div>
            <p className="text-xs">BASED IN UNITED STATES</p>
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
              Hi, I&apos;m Danish. I create solutions and exceptional experiences across all layers
              of the web.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#projects-section"
              className="see-my-work-button relative border border-slate-500 px-4 py-2 rounded overflow-hidden bg-[#222222] bg-opacity-75 hover:bg-opacity-100 z-[3]"
            >
              See My Work
            </a>
            <button
              className="flex items-center gap-2 group"
              onClick={() => setShowingResumeModal(true)}
            >
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="4.096"
                className="block group-hover:hidden"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    {" "}
                    <path
                      className="st0 fill-blue-500"
                      d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
                    ></path>{" "}
                    <path
                      className="st0 fill-blue-500"
                      d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
                    ></path>{" "}
                    <path
                      className="st0 fill-blue-500"
                      d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                height="30px"
                width="30px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="#3b82f6"
                stroke="#3b82f6"
                strokeWidth="4.096"
                className="hidden group-hover:block"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="st0 fill-white"
                      d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308 c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
                    ></path>{" "}
                    <path
                      className="st0 fill-white"
                      d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659 c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
                    ></path>{" "}
                    <path
                      className="st0 fill-white"
                      d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695 h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35 c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899 c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              View CV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
