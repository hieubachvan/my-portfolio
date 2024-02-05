import Image from "next/image";
import React from "react";

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
  return (
    <div className="bg-white p-4 rounded-lg hover:bg-slate-400 cursor-pointer transition-colors hover:text-white">
      <p className="text-xl font-semibold ">{title}</p>
      <div className="flex">
        {/* <p className="text-lg underline">{company_name}</p> */}
        <Image
          src={logo}
          width={50}
          height={50}
          alt="logo"
          style={{
            height: 30,
            width: "auto",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            padding: 5,
          }}
        />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default JobInformations;
