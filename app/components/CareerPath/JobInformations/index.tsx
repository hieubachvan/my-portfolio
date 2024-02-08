import Image from "next/image";
import React, { useContext } from "react";
import Button from "../../Button";
import ModalComponent from "../../ModalComponent";
import { ModalContext } from "@/app/untils/ModalProvider";

interface JobInformationsProps {
  data: {
    company_name: string;
    title: string;
    logo: string;
    desc: string;
  };
}

const JobInformations: React.FC<JobInformationsProps> = ({
  data: { company_name, title, logo, desc },
}) => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <>
      <div className="bg-slate-200 border-slate-500 border-2 p-4 rounded-xl hover:shadow-2xl cursor-pointer transition-colors relative group overflow-hidden">
        <p className="text-xl font-semibold ">{title}</p>
        <div className="bg-white inline-block rounded-lg">
          {/* <p className="text-lg underline">{company_name}</p> */}
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
            style={{
              height: 35,
              width: "auto",
              borderRadius: 5,
              border: "1px solid #d1d5db",
              padding: 5,
            }}
          />
        </div>
        <p>{desc}</p>
        <div className="absolute z-20 inset-0 flex  items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
          <Button onClick={() => setOpenModal(true)}>Work progress</Button>
        </div>
        <div className="absolute w-full h-full bg-slate-600 group-hover:opacity-45 top-0 left-0 flex justify-center items-center z-10 opacity-0  transition-all"></div>
      </div>
      {openModal && (
        <ModalComponent title="Work process">
          <div>update soon...</div>
        </ModalComponent>
      )}
    </>
  );
};

export default JobInformations;
