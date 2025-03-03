"use client";
// import javaScriptLogo from "../../assets/javaScript-logo.png";
// import coldFusionLogo from "../../assets/coldFusionLogo.png";
// import jQueryLogo from "../../assets/jQuery-logo.png";
// import mySQLLogo from "../../assets/mySQL-logo.jpg";
// import bootstrapLogo from "../../assets/bootstrapLogo.png";
// import typeScriptLogo from "../../assets/typeScriptLogo.svg";
// import reactJsLogo from "../../assets/reactJsLogo.svg";
// import expressJsLogo from "../../assets/expressJsLogo.png";
// import nodeJsLogo from "../../assets/nodeJsLogo.svg";
// import mongoDBLogo from "../../assets/mongoDBLogo.svg";
// import postgreSQLLogo from "../../assets/postgreSQLLogo.png";
// import tailwindLogo from "../../assets/tailwindLogo.svg";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "./evervault-card";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiJquery,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiBootstrap,
  SiAdobe,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  const skills = [
    {
      title: "React.js",
      icon: <FaReact />,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      title: "jQuery",
      icon: <SiJquery />,
    },
    {
      title: "ColdFusion",
      icon: <SiAdobe />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      title: "Express.js",
      icon: <SiExpress />,
    },
    {
      title: "MySQL",
      icon: <GrMysql />,
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      title: "Bootstrap",
      icon: <SiBootstrap />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ];

  return (
    <>
      <div id="skills-section" className="skills-section bg-black">
        <div
          id="skills-text-container"
          className="flex flex-col justify-center items-start gap-6 w-11/12 mx-auto pt-7"
        >
          <p className="text-3xl sm:text-5xl md:text-6xl pt-10 md:pt-0">Skills</p>
          {/* <div className={"grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3"}> */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, when: "beforeChildren", staggerChildren: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full pt-10"
          >
            {skills.map((item, idx) => (
              <motion.div
                variants={{
                  hidden: {
                    x: -10,
                    opacity: 0,
                  },
                  visible: {
                    x: 0,
                    opacity: 1,
                  },
                }}
                transition={{ duration: 0.75 }}
                key={idx}
                className="relative mx-auto flex h-[8rem] md:h-[13rem] w-full max-w-full flex-col items-start border p-4 border-white/[0.2]"
              >
                <Icon className="absolute -left-3 -top-3 size-6 text-white" />
                <Icon className="absolute -bottom-3 -left-3 size-6 text-white" />
                <Icon className="absolute -right-3 -top-3 size-6 text-white" />
                <Icon className="absolute -bottom-3 -right-3 size-6 text-white" />

                <EvervaultCard text={item.title} icon={item.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
