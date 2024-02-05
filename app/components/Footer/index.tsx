import React from "react";
import BoxInfomations from "./BoxInfomations";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-500 flex justify-center py-20">
      <div className="w-3/4 p-10 md:flex gap-10">
        <BoxInfomations
          className="flex-1"
          title="Lets talk about"
          arrayContent={[
            {
              icon: null,
              content:
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
            },
          ]}
        />
        <BoxInfomations
          className="flex-1 min-w-56"
          title="Links"
          arrayContent={[
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Home",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "About",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Job history",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Job history",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Tech Stacks",
            },
          ]}
        />
        <BoxInfomations
          className="flex-1 min-w-56"
          title="Services"
          arrayContent={[
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Web Design",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Web Development",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Dashboard",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Gaming",
            },
            {
              icon: <FaLongArrowAltRight color="white" />,
              content: "Data",
            },
          ]}
        />
        <BoxInfomations
          className="flex-1 min-w-80"
          title="Have a Questions?"
          arrayContent={[
            {
              icon: <IoLocationSharp size={30} color="white" />,
              content: "Tan Thuan Dong, District 7, Ho Chi Minh City, Vietnam",
            },
            {
              icon: <FaPhone color="white" />,
              content: "+84 85 288 9871",
            },
            {
              icon: <MdEmail color="white" />,
              content: "hieubachvan@gmail.com",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Footer;
