"use client";

import React from "react";
// import "./styles.css";
import { FiAlignJustify } from "react-icons/fi";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

interface HeaderProps {}

const HEADER_ACTIONS: string[] = [
  "Home",
  "About",
  "Job History",
  "Tech Stacks",
  "Contact",
];

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <>
        <div
          className={clsx(
            "block sm:hidden fixed z-50 bg-white h-full w-3/4 transition-all",
            isOpen ? "right-0" : "-right-80"
          )}
        >
          <div className="p-2" onClick={() => setIsOpen(false)}>
            <IoClose size={25} />
            <p>Updating...</p>
          </div>
        </div>

        <div
          className={clsx(
            "block sm:hidden fixed z-30 bg-slate-100 h-full w-full transition-opacity",
            isOpen ? "opacity-45" : "hidden"
          )}
        ></div>
      </>

      <div className="md:p-6 p-4 bg-slate-700 text-white fixed w-full font-bold flex justify-center z-20">
        <div className="flex sm:w-3/4 md:w-full lg:w-3/4 w-full justify-between">
          <div className="md:text-2xl text-lg ">
            <p>Weelcome to my portfolio !</p>
          </div>
          <div className="md:flex  hidden  items-center gap-6 text-lg ">
            {HEADER_ACTIONS.map((action, index) => (
              <a href={`#${action}`} key={action}>
                {action}
              </a>
            ))}
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center text-xl ml-auto"
          >
            <FiAlignJustify />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
