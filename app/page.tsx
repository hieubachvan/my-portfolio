import IntroducingSession from "./components/IntroducingSession";
import AboutMyself from "./components/AboutMyself";
import CareerPath from "./components/CareerPath";
import TechStacks from "./components/TechStacks";
import ContactInfo from "./components/ContactInfo";

export default function Home() {
  const executeScroll = (ref: any) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <div className="md:p-6 p-4 text-white  w-full font-bold flex h-30 ">
        haha
      </div>
      <div>
        <div id="Home">
          <IntroducingSession />
        </div>
        <div id="About">
          <AboutMyself />
        </div>
        <div id="Job History">
          <CareerPath />
        </div>
        <div id="Tech Stacks">
          <TechStacks />
        </div>
        <div id="Contact">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
