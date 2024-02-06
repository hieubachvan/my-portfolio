"use client";
import React from "react";
import Title from "../Tittle";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const ContactInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log("ContactInfo", errors);

  return (
    <div className="py-20 bg-slate-200 flex justify-center md:p-10">
      <div className=" md:w-full lg:w-3/4 w-full p-10">
        <div>
          <Title content="Get in touch" center={true} />
          <div className="md:flex w-full gap-10">
            <form
              className="flex-1 shadow-2xl p-4 rounded-lg mt-10 bg-slate-100 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                required
                register={register}
                label="Name"
                errors={errors}
                id="name"
              />
              <Input
                required
                register={register}
                label="Email"
                errors={errors}
                id="email"
                type="email"
              />
              <Input
                register={register}
                label="Message"
                errors={errors}
                id="message"
                type="text"
                styles={{ height: 100 }}
              />
              <Button className="mt-5" type="submit">
                Send it for me!
              </Button>
            </form>
            <div
              style={{
                backgroundImage: "url('/bottom.jpeg')",
                backgroundPosition: "25% 10%",
                backgroundSize: "cover",
              }}
              className="flex-1 shadow-2xl rounded-lg mt-10 bg-slate-100 flex flex-col gap-4 min-h-40"
            >
              <div className="bg-black opacity-50 text-white rounded-b-xl mt-auto p-4 hover:opacity-70 cursor-pointer transition-opacity">
                More infomation...{" "}
              </div>
            </div>
            {/* <div className="flex-1 shadow-2xl p-4 rounded-lg mt-10 bg-slate-100 ">
              hahaha
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
