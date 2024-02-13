import React from "react";
import Button from "../Button";
import Title from "../Tittle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMyself = () => {
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
    // show: { opacity: 1, transition: { duration: 1 } },
    // hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <div className="flex justify-center lg:h-screen">
        <div className="flex justify-center md:gap-10 md:py-20 md:w-full lg:w-3/4 p-10">
          <div className="w-1/2 bg-slate-400 relative rounded-xl md:block hidden">
            <div className="w-20 h-20 bg-slate-900"></div>
            <div className="w-40 h-40 bg-slate-900 bottom-0 right-0 absolute  rounded-full">
              <div className="w-12 h-12 bg-slate-300 bottom-0 right-0 absolute  rounded-full"></div>
            </div>
          </div>
          <div className="md:w-1/2 w-full  text-justify">
            <Title content="About Me" />
            <p>
              As a seasoned Front-End Developer with over four years of industry
              experience, I harbor an intense dedication towards my craft. My
              portfolio is diverse, encompassing projects in realms such as
              e-commerce, gaming, advertising, decentralized exchanges, and
              DAPP. At the age of 24, I am a versatile professional who
              flourishes in ever-changing work environments. My zeal and vigor
              propel me to consistently produce top-tier results. I am
              perpetually ready to embrace new challenges and strive for
              excellence in all my endeavors.
            </p>
            <div className="flex gap-5 sm:mt-10 mt-5 md:justify-start">
              <Button className=" sm:min-w-32 min-w-24">More Info</Button>
              <Button className=" sm:min-w-32 min-w-24">
                <a href="/cv/Hieu-Bach-Van.pdf" download>
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMyself;
