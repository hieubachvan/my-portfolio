"use client";
import Image from "next/image";
import React from "react";
import TypingText from "../Typing/Typing";
import Button from "../Button";
import "./styles.css";

const IntroducingSession = () => {
  const [done, setDone] = React.useState<boolean>(false);
  return (
    <div className=" bg-slate-200 md:py-40 md:pb-0 p-10 pb-0">
      <div className="flex gap-20">
        <div className="w-1/2 flex justify-end">
          <div>
            <TypingText
              setDone={setDone}
              textArray={[
                "Hello ___________",
                "I AM HIEU BACHVAN",
                "A software engineer",
                "A web developer",
                "And a programmer",
              ]}
            />
            {done && (
              <div className="flex mt-6 gap-6">
                <Button
                  className="button-slide-up"
                  styles={{
                    minWidth: 150,
                    borderRadius: 25,
                    fontSize: 20,
                    padding: 15,
                  }}
                >
                  Hire me
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/avatar.PNG"
            alt="hieubachvan"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroducingSession;
