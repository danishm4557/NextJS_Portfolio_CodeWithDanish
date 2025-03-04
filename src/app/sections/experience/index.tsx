"use client";
import { useRef, useEffect, useState } from "react";
import shopLocalLogo from "../../assets/shop-local-logo.png";
import generalAssemblyLogo from "../../assets/general-assembly-logo.png";
import javaScriptLogo from "../../assets/javaScript-logo.png";
import coldFusionLogo from "../../assets/coldFusionLogo.png";
import jQueryLogo from "../../assets/jQuery-logo.png";
import javaLogo from "../../assets/java-logo.svg";
import mySQLLogo from "../../assets/mySQL-logo.jpg";
import heidiSQLLogo from "../../assets/heidiSQL-logo.png";
import bootstrapLogo from "../../assets/bootstrapLogo.png";
import htmlLogo from "../../assets/htmlLogo.png";
import cssLogo from "../../assets/cssLogo.png";
import sourceTreeLogo from "../../assets/sourceTreeLogo.png";
import typeScriptLogo from "../../assets/typeScriptLogo.svg";
import reactJsLogo from "../../assets/reactJsLogo.svg";
import expressJsLogo from "../../assets/expressJsLogo.png";
import nodeJsLogo from "../../assets/nodeJsLogo.svg";
import mongoDBLogo from "../../assets/mongoDBLogo.svg";
import postgreSQLLogo from "../../assets/postgreSQLLogo.png";
import tailwindLogo from "../../assets/tailwindLogo.svg";
import gitLogo from "../../assets/gitLogo.png";
import Image from "next/image";
import { motion } from "framer-motion";
const Experience = () => {
  const [techStackImages, setTechStackImages] = useState<string[]>([
    javaScriptLogo,
    coldFusionLogo,
    jQueryLogo,
    javaLogo,
    mySQLLogo,
    heidiSQLLogo,
    bootstrapLogo,
    htmlLogo,
    cssLogo,
    sourceTreeLogo,
  ]);
  const [techStackNames, setTechStackNames] = useState<string[]>([
    "JavaScript",
    "ColdFusion",
    "jQuery",
    "Java",
    "MySQL",
    "HeidiSQL",
    "Bootstrap",
    "HTML",
    "CSS",
    "Sourcetree",
  ]);

  const [shopLocalOpacity, setShopLocalOpacity] = useState<string>("opacity-100");
  const [generalAssemblyOpacity, setGeneralAssemblyOpacity] = useState<string>("opacity-30");

  const [shopLocalIsInView, setShopLocalIsInView] = useState<boolean>(true);
  const [generalAssemblyIsInView, setGeneralAssemblyIsInView] = useState<boolean>(false);

  const shopLocalRef = useRef<HTMLDivElement | null>(null);
  const generalAssemblyRef = useRef<HTMLDivElement | null>(null);

  const [glowColor, setGlowColor] = useState<string>("shopLocalGlow");

  useEffect(() => {
    const shopLocal = shopLocalRef.current;
    const generalAssembly = generalAssemblyRef.current;

    const shopLocalObserver = new IntersectionObserver(
      ([entry]) => {
        setShopLocalIsInView(entry.isIntersecting); // Checks if the element is in view
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const generalAssemblyObserver = new IntersectionObserver(
      ([entry]) => {
        setGeneralAssemblyIsInView(entry.isIntersecting); // Checks if the element is in view
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (shopLocal) {
      shopLocalObserver.observe(shopLocal);
    }

    if (generalAssembly) {
      generalAssemblyObserver.observe(generalAssembly);
    }

    // shows Shop Local tech stack
    if (shopLocalIsInView) {
      setGeneralAssemblyOpacity("opacity-30");
      setShopLocalOpacity("opacity-100");
      setTechStackImages([
        javaScriptLogo,
        coldFusionLogo,
        jQueryLogo,
        javaLogo,
        mySQLLogo,
        heidiSQLLogo,
        bootstrapLogo,
        htmlLogo,
        cssLogo,
        sourceTreeLogo,
      ]);
      setTechStackNames([
        "JavaScript",
        "ColdFusion",
        "jQuery",
        "Java",
        "MySQL",
        "HeidiSQL",
        "Bootstrap",
        "HTML",
        "CSS",
        "Sourcetree",
      ]);

      setGlowColor("ShopLocal_Glow");
    }

    // shows General Assembly tech stack
    if (generalAssemblyIsInView) {
      setShopLocalOpacity("opacity-30");
      setGeneralAssemblyOpacity("opacity-100");
      setTechStackImages([
        typeScriptLogo,
        javaScriptLogo,
        reactJsLogo,
        nodeJsLogo,
        expressJsLogo,
        mongoDBLogo,
        postgreSQLLogo,
        tailwindLogo,
        bootstrapLogo,
        gitLogo,
      ]);
      setTechStackNames([
        "TypeScript",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
      ]);

      setGlowColor("GA_Glow");
    }

    return () => {
      // end 'is in view' observation
      if (shopLocal) {
        shopLocalObserver.unobserve(shopLocal);
      }
      if (generalAssembly) {
        generalAssemblyObserver.unobserve(generalAssembly);
      }
    };
  }, [generalAssemblyIsInView, shopLocalIsInView]);

  return (
    <>
      <div id="experience-section" className="experience-section text-white bg-black">
        {/* <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> */}
        <div
          id="experience-text-container"
          className="flex flex-col justify-center items-start gap-6 w-11/12 mx-auto py-7 md:py-14"
        >
          <p className="text-3xl sm:text-5xl md:text-6xl">Experience</p>
          <div className="flex gap-10 pt-7">
            {/* left-experience-container */}
            <div className="flex flex-col lg:w-1/2">
              {/* Shop Local */}
              <div
                className={`flex ${shopLocalOpacity} transition-opacity duration-700`}
                ref={shopLocalRef}
              >
                {/* dotted-line 1 */}
                <div className="flex flex-col flex-shrink-0">
                  <Image
                    alt="Bridge's Shop Local E-commerce Platform"
                    src={shopLocalLogo}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="w-0.5 mx-auto flex-1 bg-white"></div>
                </div>
                {/* experience text 1 */}
                <div className="space-y-6 pb-14">
                  <div className="ml-4">
                    <p className="text-xl sm:text-2xl">
                      Bridge&apos;s Shop Local E-commerce Platform
                    </p>
                    <p className="text-base sm:text-lg text-blue-500">Full-Stack Web Developer</p>
                    <p className="text-base sm:text-lg text-white">May 2022 - Present</p>
                  </div>
                  <ul className="mt-3 sm:text-lg space-y-4 sm:space-y-8">
                    <li className="relative">
                      <p className="ml-4">
                        Successfully completed 600+ tasks (as of October 7th, 2024), ensuring all
                        features were fully responsive and dynamic across all device viewports.
                        Leveraged Bootstrap CSS, jQuery, and AJAX to efficiently manipulate the DOM
                        and deliver seamless, interactive user experiences.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Seamlessly transitioned from PostgreSQL to MySQL and managed extensive
                        datasets of customers, retailers, brands, and sales reps to create, retrieve
                        and manipulate data.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Individually developed and implemented a seamless integration feature for
                        Shop Local, enabling brands and retailers to synchronize their Shopify and
                        Shop Local stores. This innovative solution allows clients to perform all
                        CRUD operations on product listings on a single platform, with changes
                        automatically reflected on both Shop Local and Shopify. The integration tool
                        has been highly praised by clients for its efficiency, significantly
                        reducing the time and effort needed to manage product listings across
                        multiple platforms.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Quickly learned and mastered CFML, impressing seniors with my ability to
                        rapidly contribute to the expansive codebase.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Actively participated in weekly developer meetings and engaged in continuous
                        communication with all team members and the CEO.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                  </ul>
                  <div className="ml-4 flex flex-col lg:hidden gap-3">
                    <p className="text-lg sm:text-2xl">Tech Stack</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="JavaScript Logo"
                          src={javaScriptLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">JavaScript</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="ColdFusion Logo"
                          src={coldFusionLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">ColdFusion</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="jQuery Logo"
                          src={jQueryLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">jQuery</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Java Logo"
                          src={javaLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Java</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="mySQL Logo"
                          src={mySQLLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">MySQL</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="HeidiSQL Logo"
                          src={heidiSQLLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">HeidiSQL</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Bootstrap Logo"
                          src={bootstrapLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Bootstrap</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="HTML Logo"
                          src={htmlLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">HTML</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="CSS Logo"
                          src={cssLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">CSS</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="SourceTree Logo"
                          src={sourceTreeLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Sourcetree</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* General Assembly */}
              <div
                className={`flex ${generalAssemblyOpacity} transition-opacity duration-700`}
                ref={generalAssemblyRef}
              >
                {/* dotted-line 1 */}
                <div className="flex flex-col flex-shrink-0">
                  <Image
                    alt="General Assembly Logo"
                    src={generalAssemblyLogo}
                    height={50}
                    width={50}
                    className="rounded-full object-cover"
                  />
                  <div className="w-0.5 mx-auto flex-1 bg-white"></div>
                </div>
                {/* experience text 1 */}
                <div className="space-y-6 pb-14">
                  <div className="ml-4">
                    <p className="text-xl sm:text-2xl">General Assembly</p>
                    <p className="text-base sm:text-lg text-blue-500">Software Engineer Fellow</p>
                    <p className="text-base sm:text-lg text-white">October 2021 - February 2022</p>
                  </div>
                  <ul className="mt-3 sm:text-lg space-y-4 sm:space-y-8">
                    <li className="relative">
                      <p className="ml-4">
                        Mastered foundational web development skills, including HTML, CSS,
                        JavaScript, and React.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Served as a full-stack development student, leveraging technologies such as
                        DOM, Bootstrap, Express, REST, CRUD operations, MongoDB, Mongoose, Flask,
                        React, and SQL-based relational databases.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Consistently utilized GitHub for version control, effectively managing both
                        collaborative and personal projects.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                    <li className="relative">
                      <p className="ml-4">
                        Demonstrated strong communication skills by presenting project code and
                        thoroughly explaining underlying logic to peers and instructors.
                      </p>
                      <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 bg-white rounded-full"></span>
                    </li>
                  </ul>
                  <div className="ml-4 flex flex-col lg:hidden gap-3">
                    <p className="text-lg sm:text-2xl">Tech Stack</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="TypeScript Logo"
                          src={typeScriptLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">TypeScript</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="JavaScript Logo"
                          src={javaScriptLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Javascript</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="React Logo"
                          src={reactJsLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">React.js</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Node.js Logo"
                          src={nodeJsLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Node.js</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Express.js Logo"
                          src={expressJsLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Express.js</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="MongoDB Logo"
                          src={mongoDBLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">MongoDB</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="PostgreSQL Logo"
                          src={postgreSQLLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">PostgreSQL</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Github Logo"
                          src={gitLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Git</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Tailwind Logo"
                          src={tailwindLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Tailwind CSS</p>
                      </div>
                      <div className="bg-[#121212] flex items-center gap-3 rounded-lg pl-2 pr-4 py-2">
                        <Image
                          alt="Bootstrap Logo"
                          src={bootstrapLogo}
                          className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover"
                        />
                        <p className="text-md sm:text-lg">Bootstrap</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* desktop tech stack container */}
            <div className="right-experience-container w-1/2 hidden lg:flex flex-col gap-10 sticky h-full top-12">
              <p className="text-xl sm:text-2xl">Tech Stack</p>
              <div className="grid grid-cols-2 gap-3">
                {techStackNames.map((item, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 1, when: "beforeChildren", staggerChildren: 2 }}
                    className={"flex items-center gap-3 rounded-lg bg-[#121212] p-2"}
                    key={index}
                  >
                    <Image
                      alt={`${item} Logo`}
                      src={techStackImages[index]}
                      className="h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16 object-cover"
                    />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
