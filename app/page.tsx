// import IntroducingSession from "./components/IntroducingSession";
// import AboutMyself from "./components/AboutMyself";
// import CareerPath from "./components/CareerPath";
// import TechStacks from "./components/TechStacks";
// import ContactInfo from "./components/ContactInfo";
"use client";
import dynamic from "next/dynamic";

const IntroductionPage = dynamic(
  () => import("./components/IntroducingSession")
);
const AboutMyselfPage = dynamic(() => import("./components/AboutMyself"));
const CareerPathPage = dynamic(() => import("./components/CareerPath"));
const TechStacksPage = dynamic(() => import("./components/TechStacks"));
const ContactInfoPage = dynamic(() => import("./components/ContactInfo"));

export default function Home() {
  return (
    <div>
      <div className="md:p-6 p-4 text-white  w-full font-bold flex h-30 "></div>
      <div>
        <div id="Home">
          <IntroductionPage />
        </div>
        <div id="About">
          <AboutMyselfPage />
        </div>
        <div id="Job History">
          <CareerPathPage />
        </div>
        <div id="Tech Stacks">
          <TechStacksPage />
        </div>
        <div id="Contact">
          <ContactInfoPage />
        </div>
      </div>
    </div>
  );
}
