import React, { useCallback, useEffect, useRef } from "react";
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./arrowButtons";
// import { DotButton, useDotButton } from "./dotButtons";
import Image from "next/image";
import Link from "next/link";
// import shopLocalLogo from "../../assets/shop-local-logo.png";
// import generalAssemblyLogo from "../../assets/general-assembly-logo.png";
// import javaScriptLogo from "../../assets/javaScript-logo.png";
// import coldFusionLogo from "../../assets/coldFusionLogo.png";
// import jQueryLogo from "../../assets/jQuery-logo.png";
// import javaLogo from "../../assets/java-logo.svg";
// import mySQLLogo from "../../assets/mySQL-logo.jpg";
// import heidiSQLLogo from "../../assets/heidiSQL-logo.png";
// import bootstrapLogo from "../../assets/bootstrapLogo.png";
// import htmlLogo from "../../assets/htmlLogo.png";
// import cssLogo from "../../assets/cssLogo.png";
// import sourceTreeLogo from "../../assets/sourceTreeLogo.png";
import typeScriptLogo from "../../assets/typeScriptLogo.svg";
import reactJsLogo from "../../assets/reactJsLogo.svg";
// import expressJsLogo from "../../assets/expressJsLogo.png";
// import nodeJsLogo from "../../assets/nodeJsLogo.svg";
// import mongoDBLogo from "../../assets/mongoDBLogo.svg";
// import postgreSQLLogo from "../../assets/postgreSQLLogo.png";
import tailwindLogo from "../../assets/tailwindLogo.svg";
// import gitLogo from "../../assets/gitLogo.png";
import viteLogo from "../../assets/viteLogo.svg";
import cloudflareLogo from "../../assets/cloudflareLogo.svg";
import framerMotionLogo from "../../assets/framerMotionLogo.svg";

const products = [
  {
    title: "EvoGym",
    link: "https://gym-website-46r.pages.dev/",
    githubURL: "https://github.com/danishm4557/gym_website",
    thumbnail: "/projects/evoGym.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Danish Studio Photography",
    link: "https://danish-studio-photography.pages.dev/",
    githubURL: "https://github.com/danishm4557/Danish-Studio-Photography",
    thumbnail: "/projects/danishStudioPhotography.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Shop Local Sales Site",
    link: "https://shoplocal.org/",
    githubURL: "",
    thumbnail: "/projects/shopLocalSalesSite.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Pocket Guru",
    link: "https://github.com/danishm4557/PocketGuru",
    githubURL: "https://github.com/danishm4557/PocketGuru",
    thumbnail: "/projects/pocketGuru.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Shop Local Retailer Dashboard",
    link: "https://bridge.myshoplocal.com/",
    githubURL: "",
    thumbnail: "/projects/bridgePlatform.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Shop Local Shopify Integration Software",
    link: "https://bridge.myshoplocal.com/",
    githubURL: "",
    thumbnail: "/projects/shopLocalShopifyPage.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "CrimeFlix",
    link: "https://github.com/danishm4557/crimeFlix",
    githubURL: "https://github.com/danishm4557/crimeFlix",
    thumbnail: "/projects/crimeFlix.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
  {
    title: "Casino Roulette",
    link: "https://danishm4557.github.io/Casino-Roulette/",
    githubURL: "https://github.com/danishm4557/Casino-Roulette",
    thumbnail: "/projects/casinoRoulette.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate arcu ac bibendum ultricies. Aenean quis lorem vitae sapien dignissim convallis. Cras porttitor, lacus vel tristique tincidunt, augue risus semper mi, in tristique turpis sapien non sem. Aliquam vel purus eu sapien ultrices interdum nec in enim. Pellentesque ornare risus diam. Cras semper odio vitae enim pharetra, ac tincidunt tortor pharetra. Integer a rutrum dolor.",
    techName: ["React", "TypeScript", "Tailwind CSS", "Vite", "Clouflare", "Framer Motion"],
    techImages: [
      reactJsLogo,
      typeScriptLogo,
      tailwindLogo,
      viteLogo,
      cloudflareLogo,
      framerMotionLogo,
    ],
  },
];

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const ProjectsCarousel: React.FC = () => {
  //   const { slides, options } = props;
  const options: EmblaOptionsType = { loop: true };
  const slides = Array.from(Array(8).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  //   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="slide_number relative group">
                  <Image
                    src={products[index].thumbnail}
                    alt="project image"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  {products[index].githubURL.length > 0 && (
                    <Link
                      href={products[index].githubURL}
                      target="_blank"
                      className="bg-black/80 border border-transparent absolute z-30 inset-0 h-full w-full opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path
                          d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"
                          className="fill-white"
                        ></path>
                        <path
                          d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"
                          className="fill-white"
                        ></path>
                      </svg>
                      <span>View Source</span>
                    </Link>
                  )}
                </div>
                <div className="text-section p-4 w-full flex flex-col bg-[#121212]">
                  <div className="flex flex-col md:flex-row gap-1 md:gap-3 justify-between items-start md:items-center text-sm">
                    <span className="text-lg font-bold whitespace-pre-wrap">
                      {products[index].title}
                    </span>
                    <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <Link
                        href={products[index].link}
                        target="_blank"
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl"
                      >
                        Website
                      </Link>
                    </span>
                  </div>
                  <div className="py-3 text-sm">{products[index].description}</div>
                  <div className="py-3 flex flex-wrap gap-1">
                    {products[index].techName.map((name, techIndex) => (
                      <div
                        className="bg-black flex items-center gap-3 rounded-lg pl-2 pr-4 py-2 border border-gray-500"
                        key={techIndex}
                      >
                        <Image
                          alt="Tech Logo"
                          src={products[index].techImages[techIndex]}
                          className="h-5 w-5 object-cover"
                        />
                        <span className="text-sm">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
