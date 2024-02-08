"use client";
import React, { useState, useEffect, CSSProperties } from "react";
interface TypingTextProps {
  textArray: string[];
  style?: CSSProperties;
  setDone: (done: boolean) => void;
}
const TypingText: React.FC<TypingTextProps> = ({
  textArray,
  style,
  setDone,
}) => {
  const [content, setContent] = useState<string>("");
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  useEffect(() => {
    const typing = setInterval(() => {
      if (arrayIndex < textArray.length) {
        if (charIndex < textArray[arrayIndex].length) {
          setContent((prev) => prev + textArray[arrayIndex].charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setContent((prev) =>
            arrayIndex === textArray.length - 1 ? prev : prev + "\n"
          ); // Xuống dòng khi kết thúc một chuỗi
          setArrayIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      } else {
        setIsDone(true);
        setDone(true);
        clearInterval(typing);
      }
    }, 100); // Thời gian giữa mỗi lần gõ
    return () => clearInterval(typing);
  }, [textArray, arrayIndex, charIndex]);
  // console.log(isDone);

  return (
    <div
      className="whitespace-pre-wrap md:min-w-80 bg-black p-4 rounded-md shadow-xl"
      style={style}
    >
      <p className=" md:text-4xl text-white">
        {content}
        <span className={isDone ? "animate-blink" : "text-white"}>_</span>
      </p>
    </div>
  );
};
export default TypingText;
