import { HeroParallax } from "./hero-parallax";

const products = [
  {
    title: "EvoGym",
    link: "https://gym-website-46r.pages.dev/",
    thumbnail: "/projects/evoGym.png",
  },
  {
    title: "Danish Studio Photography",
    link: "https://danish-studio-photography.pages.dev/",
    thumbnail: "/projects/danishStudioPhotography.png",
  },
  {
    title: "Shop Local Sales Site",
    link: "https://shoplocal.org/",
    thumbnail: "/projects/shopLocalSalesSite.png",
  },
  {
    title: "Pocket Guru",
    link: "https://github.com/danishm4557/PocketGuru",
    thumbnail: "/projects/pocketGuru.png",
  },
  {
    title: "Shop Local Retailer Dashboard",
    link: "https://bridge.myshoplocal.com/",
    thumbnail: "/projects/bridgePlatform.png",
  },
  {
    title: "Shop Local Shopify Integration Software",
    link: "https://bridge.myshoplocal.com/",
    thumbnail: "/projects/shopLocalShopifyPage.png",
  },
  {
    title: "CrimeFlix",
    link: "https://github.com/danishm4557/crimeFlix",
    thumbnail: "/projects/crimeFlix.png",
  },
  {
    title: "Casino Roulette",
    link: "https://danishm4557.github.io/Casino-Roulette/",
    thumbnail: "/projects/casinoRoulette.png",
  },
  {
    title: "Danish Studio Photography",
    link: "https://danish-studio-photography.pages.dev/",
    thumbnail: "/projects/danishStudioPhotography-2.png",
  },
];

const Projects = () => {
  return (
    <div className="projects-section bg-black" id="projects-section">
      <HeroParallax products={products} />
      <div className="pb-16 text-center">
        <button className="border border-slate-500 px-4 py-2 rounded overflow-hidden bg-[#222222] bg-opacity-75 hover:bg-opacity-100 cursor-pointer">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
