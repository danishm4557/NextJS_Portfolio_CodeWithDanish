import React from "react";
import { motion } from "framer-motion";
import closeButton from "../../../assets/closeButton.svg";
import fullScreenButton from "../../../assets/fullScreenButton.svg";
import downloadButton from "../../../assets/downloadButton.svg";
import Image from "next/image";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

type Props = {
  setShowingResumeModal: (value: boolean) => void;
  setShowingResumeFullScreen: (value: boolean) => void;
};

const ResumeModal = ({ setShowingResumeModal, setShowingResumeFullScreen }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="resume-section"
      className="resume-section"
      onClick={() => {
        // close modal when outside of modal is clicked
        setShowingResumeModal(false);
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="resume-section-content w-[90vw] md:w-[60vw] md:h-[90vh]"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div className="flex flex-col gap-6">
          {/* buttons bar */}
          <div className="flex justify-between items-center fixed z-50 w-full h-10 px-2 resume-buttons-bar">
            <div className="flex gap-3">
              <button
                className="button-resume-full-screen w-7 h-7"
                onClick={() => [setShowingResumeModal(false), setShowingResumeFullScreen(true)]}
              >
                <Image src={fullScreenButton} alt="full screen button" />
              </button>
              <a
                href="/resume_danish_mohiuddin.pdf"
                download="resume_danish_mohiuddin.pdf"
                target="_blank"
                className="button-resume-download w-7 h-7"
                onClick={() => setShowingResumeModal(false)}
              >
                <Image src={downloadButton} alt="download button" className="w-[95%] h-[95%]" />
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className="button-resume-close-modal w-7 h-7 hover:rotate-180 duration-300"
                onClick={() => setShowingResumeModal(false)}
              >
                <Image src={closeButton} alt="close button" />
              </button>
            </div>
          </div>
          {/* resume pdf */}
          <div className="mt-10 pr-0" id="resumeDiv">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl="/resume_danish_mohiuddin.pdf" />
            </Worker>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;
