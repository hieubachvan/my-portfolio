import Image from "next/image";
import IntroducingSession from "./components/IntroducingSession";
import AboutMyself from "./components/AboutMyself";
import CareerPath from "./components/CareerPath";
import TechStacks from "./components/TechStacks";

export default function Home() {
  return (
    <div>
      <div className="md:p-6 p-4 text-white  w-full font-bold flex h-30 ">
        haha
      </div>
      <div>
        <IntroducingSession />
        <AboutMyself />
        <CareerPath />
        <TechStacks />
      </div>
    </div>
  );
}
