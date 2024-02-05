"use client";
import React, { CSSProperties } from "react";
import Title from "../Tittle";
import _ from "lodash";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";

export const TechStaskBox = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <div style={{ ...style }} className={className}>
      {children}
    </div>
  );
};
const techStackColors = [
  {
    tech: "Node.js",
    color: "#43853D",
    backgroundColor: "#A3C2A4",
    icon: <FaNodeJs size={20} />,
  },
  {
    tech: "React",
    color: "#61DAFB",
    backgroundColor: "#A6E4FA",
    icon: <FaReact size={20} />,
  },
  {
    tech: "JavaScript",
    color: "#F7DF1E",
    backgroundColor: "#FAF7BE",
    icon: <IoLogoJavascript size={20} />,
  },
  {
    tech: "jQuery",
    color: "#0769AD",
    backgroundColor: "#A1B2D1",
    icon: <DiJqueryLogo size={20} />,
  },
  {
    tech: "HTML5",
    color: "#E34F26",
    backgroundColor: "#F2A59D",
    icon: <FaHtml5 size={20} />,
  },
  {
    tech: "CSS",
    color: "#1572B6",
    backgroundColor: "#92B2D6",
    icon: <FaCss3 size={20} />,
  },
  {
    tech: "Next.js",
    color: "#000000",
    backgroundColor: "#A9A9A9",
    icon: <TbBrandNextjs size={20} />,
  },
  {
    tech: "GitHub",
    color: "#181717",
    backgroundColor: "#797979",
    icon: <FaGithub size={20} />,
  },
  {
    tech: "Docker",
    color: "#2496ED",
    backgroundColor: "#92C9F7",
    icon: <FaDocker size={20} />,
  },
  {
    tech: "GitLab",
    color: "#FCA121",
    backgroundColor: "#FDE3A1",
    icon: <FaGitlab size={20} />,
  },
  {
    tech: "TypeScript",
    color: "#3178C6",
    backgroundColor: "#92B2D6",
    icon: <SiTypescript size={20} />,
  },
  {
    tech: "Vue.js",
    color: "#4FC08D",
    backgroundColor: "#A6F2D2",
    icon: <FaVuejs size={20} />,
  },
  {
    tech: "Material-UI",
    color: "#0081CB",
    backgroundColor: "#92C9F7",
    icon: <FaReact size={20} />,
  },
  {
    tech: "Redux",
    color: "#764ABC",
    backgroundColor: "#C1A7D6",
    icon: <SiRedux size={20} />,
  },
  {
    tech: "Photoshop",
    color: "#31A8FF",
    backgroundColor: "#92C9F7",
    icon: <SiAdobephotoshop size={20} />,
  },
  {
    tech: "Figma",
    color: "#F24E1E",
    backgroundColor: "#F7A59D",
    icon: <FaFigma size={20} />,
  },
  {
    tech: "InVision",
    color: "#FF3366",
    backgroundColor: "#FFA6B3",
    icon: <FaInvision size={20} />,
  },
];

export function GridComponent() {
  // Tạo một mảng với 17 phần tử, mỗi phần tử là một số ngẫu nhiên từ 1 đến 4.

  const gridSizes = _.times(17, () => _.random(1, 4));

  return (
    <div className="grid md:grid-cols-8 grid-cols-2 gap-4 border-2 p-4">
      {gridSizes.map((size: any, i: any) => (
        <div
          key={i}
          style={{
            border: "2px solid",
            borderColor: techStackColors[i].color,
            background: techStackColors[i].backgroundColor,
          }}
          className={` p-4 col-span-${size} row-span-${size} rounded-md hover:scale-110 transition-transform duration-200`}
        >
          {techStackColors[i].icon}
          {techStackColors[i].tech}
        </div>
      ))}
    </div>
  );
}

const TechStacks = () => {
  return (
    <div className="flex md:py-20 p-10 justify-center">
      <div className="md:w-3/4 w-full">
        <Title content="Tech Stacks" />
        {/* <div className="border-2 relative" style={{ height: "55vh" }}>
          <TechStaskBox className="bg-blue-400 text-center py-10 px-52  right-2 top-2 rounded-md absolute">
            <FaReact color="white" size={50} />
            <p className="text-white">ReactJS</p>
          </TechStaskBox>
          <div
            className="absolute flex gap-2 "
            style={{ right: "1%", top: "34%" }}
          >
            <TechStaskBox className="bg-blue-400 text-center p-5 px-10 w-full  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-5 px-10  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-5 px-10  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
          </div>
          <div
            style={{ right: "1%", top: "59%" }}
            className="absolute grid grid-cols-2 grid-rows-2 gap-4"
          >
            <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
          </div>
          <div
            style={{ top: "2%", left: "1%" }}
            className="absolute flex gap-4"
          >
            <div className="flex flex-col gap-4">
              <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
                <FaReact color="white" size={50} />
                <p className="text-white">ReactJS</p>
              </TechStaskBox>
              <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
                <FaReact color="white" size={50} />
                <p className="text-white">ReactJS</p>
              </TechStaskBox>
              <TechStaskBox className="bg-blue-400 text-center p-2 px-11  rounded-md">
                <FaReact color="white" size={50} />
                <p className="text-white">ReactJS</p>
              </TechStaskBox>
            </div>
            <div className="flex flex-col gap-4">
              <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
                <FaReact color="white" size={50} />
                <p className="text-white">ReactJS</p>
              </TechStaskBox>
              <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
                <FaReact color="white" size={50} />
                <p className="text-white">ReactJS</p>
              </TechStaskBox>
            </div>
          </div>
          <div style={{ top: "30%" }} className="flex gap-4 absolute">
            <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
            <TechStaskBox className="bg-blue-400 text-center p-9 px-11  rounded-md">
              <FaReact color="white" size={50} />
              <p className="text-white">ReactJS</p>
            </TechStaskBox>
          </div>
          <TechStaskBox
            style={{ left: "34%", top: "2%" }}
            className="bg-blue-400 text-center p-9 px-11  rounded-md absolute"
          >
            <FaReact color="white" size={50} />
            <p className="text-white">ReactJS</p>
          </TechStaskBox>
        </div> */}
        <GridComponent />
        {/* <div className="h-40 w-40 border-8 border-black mt-20 relative bg-slate-200">
          <div className="absolute h-20 w-20 border-4 border-red-300"></div>
          <div className="absolute h-20 w-20 border-4 border-blue-300 bottom-0 right-0"></div>
        </div> */}
      </div>
    </div>
  );
};

export default TechStacks;
