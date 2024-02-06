import React from "react";
import Divider from "../Divider";
import Title from "../Tittle";
import JobInformations from "./JobInformations";

const carrerPath = [
  {
    company_name: "CAAD",
    title: "Software engineer",
    logo: "https://www.ca-adv.vn/wp-content/themes/site/assets/images/logo.png",
    desc: "CA ADVANCE is one of the subsidiaries of the Cyber ​​Agent group, which is currently very developed in Japan. In 2014, CA ADVANCE opened its first foreign branch in Ho Chi Minh City - Vietnam. The company specializes in the field of Internet advertising, aiming to provide customers with the most modern and effective Internet Advertising services.",
  },
  {
    company_name: "VNG",
    title: "Software engineer",
    logo: "https://vnggames.com/_next/image?url=%2Fassets%2Fimages%2Flogo.webp&w=2560&q=100",
    desc: "VNG Company (VNG) is a technology company established in 2004, specializing in digital content, online entertainment, social networking.",
  },
  {
    company_name: "Lucents",
    title: "Front-end developer",
    logo: "https://lucents.xyz/vercel.png",
    desc: "Lucents Technology strives to deliver innovative and effective solutions to our customers by harnessing the power of cutting-edge technologies.",
  },
  {
    company_name: "Simicart",
    title: "Front-end developer",
    logo: "https://www.simicart.com/pwa/static/media/simicart-logo.75850400.svg",
    desc: "With over 10 years working in the eCommerce industry, we understand the difficulties customers and merchants are facing in buying and selling products online. We work hard every day with no purpose other than perfecting customer experience in online shopping and at the same time increase store owners' revenue.",
  },
];

const CareerPath = () => {
  return (
    <div className="bg-slate-200 md:py-20  p-10  flex justify-center">
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
  );
};

export default CareerPath;
