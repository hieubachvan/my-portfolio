"use client";
import React, { useContext } from "react";
import TypingText from "../Typing/Typing";
import Button from "../Button";
import "./styles.css";

const IntroducingSession = () => {
  const [done, setDone] = React.useState<boolean>(false);
  return (
    <div
      style={{ backgroundImage: "url('/images/background1.avif')" }}
      className="bg-slate-200 md:py-30 md:pb-0 md:p-10 pb-0 pt-10 flex justify-center lg:h-screen h-96"
    >
      <div className="flex md:gap-20 md:w-full lg:w-3/4 sm:px-0 px-10 w-full">
        <div className="sm:w-1/2 w-full flex md:pt-20 lg:pt-80 relative">
          <div className="mb-10">
            <TypingText
              setDone={setDone}
              textArray={[
                "Hello ___________",
                "I AM HIEU BACHVAN",
                "A software engineer",
                "And a web developer",
              ]}
            />
            {done && (
              <div className="flex mt-6 gap-6">
                <Button className="button-slide-up md:text-2xl">Hire me</Button>
              </div>
            )}
          </div>
        </div>
        {/* <div className=" w-1/2 relative">
        
        </div> */}
      </div>
    </div>
  );
};

export default IntroducingSession;
