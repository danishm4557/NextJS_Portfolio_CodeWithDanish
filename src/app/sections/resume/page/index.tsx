import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Image from "next/image";
import backButton from "../../../assets/backButton.svg";

type Props = {
  setShowingResumeModal: (value: boolean) => void;
  setShowingResumeFullScreen: (value: boolean) => void;
};

const ResumePage = ({ setShowingResumeModal, setShowingResumeFullScreen }: Props) => {
  return (
    <>
      <div className="relative" id="resumeFullPage">
        <button
          className="absolute top-3 left-3 z-[2] w-5 sm:w-6 md:w-7 xl:w-8"
          onClick={() => [setShowingResumeFullScreen(false), setShowingResumeModal(true)]}
        >
          <Image src={backButton} alt="back button" />
        </button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="/resume_danish_mohiuddin.pdf" />
        </Worker>
      </div>
    </>
  );
};

export default ResumePage;
