"use client";
import React, { useContext } from "react";
import Divider from "../Divider";
import Title from "../Tittle";
import JobInformations from "./JobInformations";
import { ModalContext } from "@/app/untils/ModalProvider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const carrerPath = [
  {
    company_name: "CAAD",
    title: "Software engineer",
    logo: "/images/caadLogo.webp",
    desc: "CA ADVANCE is one of the subsidiaries of the Cyber ​​Agent group, which is currently very developed in Japan. In 2014, CA ADVANCE opened its first foreign branch in Ho Chi Minh City - Vietnam. The company specializes in the field of Internet advertising, aiming to provide customers with the most modern and effective Internet Advertising services.",
  },
  {
    company_name: "VNG",
    title: "Software engineer",
    logo: "/images/vngLogo.png",
    desc: "VNG Company (VNG) is a technology company established in 2004, specializing in digital content, online entertainment, social networking.",
  },
  {
    company_name: "Lucents",
    title: "Front-end developer",
    logo: "/images/lucentLogo.webp",
    desc: "Lucents Technology strives to deliver innovative and effective solutions to our customers by harnessing the power of cutting-edge technologies.",
  },
  {
    company_name: "Simicart",
    title: "Front-end developer",
    logo: "/images/simicartLogo.png",
    desc: "With over 10 years working in the eCommerce industry, we understand the difficulties customers and merchants are facing in buying and selling products online. We work hard every day with no purpose other than perfecting customer experience in online shopping and at the same time increase store owners' revenue.",
  },
];

const CareerPath = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { ref, inView } = useInView({
    triggerOnce: true, // Thêm option này nếu bạn chỉ muốn animation chạy một lần
  });

  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <div className="bg-slate-200 md:py-20  p-10  flex justify-center lg:h-screen">
        <div className="md:w-full lg:w-3/4">
          <Title content="Job History" />
          <p className="text-slate-600 md:w-3/4 mb-10 md:text-left text-justify ">
            With a passion for programming, I started working part-time for an
            e-commerce company while still in school. Subsequently, I have been
            associated with companies in the gaming and data sectors, among
            others. Below is my work history and the titles I held at the
            companies I've worked with.
          </p>
          <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-4">
            {carrerPath.map((data, index) => (
              <JobInformations key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerPath;
