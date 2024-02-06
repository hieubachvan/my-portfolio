import React from "react";
import BoxInfomations from "./BoxInfomations";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const socialMedias = [
  {
    icon: <FaFacebookF size={30} color="white" />,
    href: "https://www.facebook.com/jonny.bach.75/ ",
  },
  {
    icon: <FaLinkedinIn size={30} color="white" />,
    href: "https://www.linkedin.com/in/hieu-bachvan-938331219/",
  },
];

const Footer = () => {
  return (
    <div className="bg-slate-500">
      <div className=" flex sm:justify-center p-10 py-20">
        <div className="md:w-full lg:w-3/4 md:p-10  md:flex gap-10">
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
            className="flex-1 "
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
            className="flex-1 "
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
            className="flex-1 "
            title="Have a Questions?"
            arrayContent={[
              {
                icon: <IoLocationSharp size={30} color="white" />,
                content:
                  "Tan Thuan Dong, District 7, Ho Chi Minh City, Vietnam",
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
      <div className="fixed z-50 top-52 right-5">
        {socialMedias.map((socialMedia, index) => (
          <div
            key={index}
            className="hidden md:block  items-center justify-center bg-slate-400 rounded-full p-4 mx-2 mb-5 shadow-inherit hover:bg-slate-500 cursor-pointer transition-colors"
          >
            <a href={socialMedia.href} target="_blank">
              {socialMedia.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
