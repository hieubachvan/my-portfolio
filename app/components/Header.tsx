"use client";

import React from "react";

import { FiAlignJustify } from "react-icons/fi";
import Input from "./Input";
import { useForm } from "react-hook-form";

interface HeaderProps {}

const HEADER_ACTIONS: string[] = [
  "Home",
  "About",
  "Projects",
  "Contact",
  "Resume",
];

const Header: React.FC<HeaderProps> = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="md:p-6 p-4 bg-slate-700 text-white fixed w-full font-bold flex justify-center z-20">
      <div className="flex w-3/4 justify-between">
        <div className="md:text-2xl text-lg ">
          <p>Weelcome to my portfolio !</p>
        </div>
        <div className="md:flex  hidden  items-center gap-6 text-lg ">
          {HEADER_ACTIONS.map((action, index) => (
            <div key={action}>{action}</div>
          ))}
        </div>
        <div className="md:hidden flex items-center text-xl ml-auto">
          <FiAlignJustify />
        </div>
      </div>
    </div>
  );
};

export default Header;
