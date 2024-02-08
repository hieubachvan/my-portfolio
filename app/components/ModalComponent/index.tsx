"use client";
import { ModalContext } from "@/app/untils/ModalProvider";
import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";

const ModalComponent = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { setOpenModal } = useContext(ModalContext);
  return (
    <>
      <div
        style={{ left: 30 }}
        className="sm:w-1/2 sm:h-1/2 w-80 h-3/4 fixed  flex items-center justify-start bg-white z-40 rounded-xl sm:top-1/4 sm:left-1/4 top-20  p-5"
      >
        <div>
          <div
            onClick={() => setOpenModal(false)}
            className="absolute right-2 top-2 cursor-pointer rounded-full p-2 hover:bg-slate-300 z-50"
          >
            <IoMdClose size={25} />
          </div>
          <p className="text-2xl font-bold absolute top-5 left-0 border-b-2 w-full pl-5 pb-2 bg-white">
            {title}
          </p>
          <div className="sm:h-96 h-96 overflow-scroll pt-10">{children}</div>
        </div>
      </div>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed w-full h-full bg-slate-500 opacity-35 top-0 left-0"
      ></div>
    </>
  );
};

export default ModalComponent;
