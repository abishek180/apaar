"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import sidedashboard from "../../Images/sidedashboard.png";
import { Button } from "reactstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import emailjs from "@emailjs/browser";
import close from "/src/app/Images/close.svg";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { FaCircleCheck } from "react-icons/fa6";

export default function Page() {
  // const [name, setName] = useState("");
  // const [radio, setRadio] = useState("");
  // const [number, setNumber] = useState("");
  // const [school, setSchool] = useState("");
  // const [role, setRole] = useState("");
  // const [errors, setErrors] = useState({});
  // const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      radio: "",
      school: "",
      number: "",
      role: "",
    },

    enableReinitialize: true,

    validateOnChange: false,

    validationSchema: yup.object().shape({
      name: yup.string().required("Required"),
      radio: yup.string().required("Required"),
      school: yup.string().required("Required"),
      number: yup.number().required("Must be 10 digits"),
      role: yup.string().required("Required"),
    }),

    onSubmit: async (e) => {
      console.log(e);

      emailjs
        .send(
          "service_bqhvp46",
          "template_e7wa7ls",
          {
            to_name: e.name,
            option: e.radioradio,
            school: e.school,
            number: e.number,
            role: e.role,
          },
          "kFZTDWpSoa3dQ7HQ9"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setMessage(<div className="flex flex-col justify-center items-center gap-2"><FaCircleCheck className="text-[green] text-[50px]"/><span className="text-[green] text-center"> Thank you. We have received your request and our team will contact you within 48 hours to assist</span></div>);
            }
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <div className="h-screen lg:flex lg:justify-center lg:items-center">
      <div className="flex flex-col lg:flex lg:flex-row lg:justify-center lg:items-center shadow-[-4px_0px_41px_0px_rgba(8,_10,_9,_0.11)] lg:w-[900px] lg:h-[742px] md:h-screen md:w-screen w-screen h-screen rounded-[30px] bg-[#FFF]">
        <div className="w-screen h-[90px] lg:w-[394px] md:w-screen  lg:h-[742px] bg-[#2C2C2C] lg:flex lg:flex-col lg:justify-center  lg:items-center lg:rounded-l-[30px]">
          <Image
            src={sidedashboard}
            alt="dashboard"
            className="hidden lg:block w-[330px] h-[390px] ml-12"
          />
          <div className="w-[314px] h-[90px] lg:flex lg:justify-center lg:items-left lg:ml-16 lg:pt-12 lg:pl-0 pl-7 pt-6">
            <h1 className="lg:text-[24px] text-[16px] font-semibold text-[#FFF]">
              All-in-One Platform for Academic Automation and Resolution.
            </h1>
          </div>
        </div>
        <div className="p-[24px] flex flex-col justify-between items-center lg:w-[600px] lg:p-[60px] ">
          <form
            class="flex flex-col"
            action={"submit"}
            onSubmit={formik.handleSubmit}
          >
            <div className="flex ">
              <p className="text-[#060606] text-[24px] lg:text-[32px] font-extrabold">
                Digitize your school in minutes with Apaar integrated platform
              </p>
              
                <Link href="/">
                  <Image src={close} className=" w-[80px] hover:bg-gray-400 rounded-[50%]" />
                </Link>
              
            </div>
            <div class="mb-6 mt-10">
              <div class="w-full  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[11px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  YOUR
                  NAME
                  placeholder="Enter Your Name"
                  value={formik.values.name}
                  onChange={(e) => {
                    console.log(e.target.value);
                    formik.setFieldValue("name", e.target.value);
                  }}
                />
                {formik.errors.name && (
                  <p className="text-[red] text-[14px] mb-[6px]">{formik.errors.name}</p>
                )}
              </div>
              <div class="w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Select your organization type
                </label>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Independent school"
                      name="a"
                      control={<Radio />}
                      label="Independent school"
                      className="text-[#7E92A2] text-[14px] font"
                      onChange={(e) => {
                        console.log(e.target.value);
                        formik.setFieldValue("radio", e.target.value);
                      }}
                    />
                    <FormControlLabel
                      value="Group school"
                      name="a"
                      control={<Radio />}
                      label="Group school"
                      className="text-[#7E92A2] text-[14px] font"
                      onChange={(e) => {
                        console.log(e.target.value);
                        formik.setFieldValue("radio", e.target.value);
                      }}
                    />
                  </RadioGroup>
                  {formik.errors.radio && (
                  <p className="text-[red] text-[14px] mb-[6px]">{formik.errors.radio}</p>
                )}
                </FormControl>
              </div>
            </div>
            <div class=" mb-6">
              <div class="w-full ">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-school"
                >
                  Name of your School
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[11px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-school"
                  type="text"
                  placeholder="eg: NIMS School Dubai"
                  value={formik.values.school}
                  onChange={(e) => {
                    console.log(e.target.value);
                    formik.setFieldValue("school", e.target.value);
                  }}
                />
                {formik.errors.school && (
                  <p className="text-[red] text-[14px] mb-[6px]">{formik.errors.school}</p>
                )}
              </div>
            </div>
            <div class="flex gap-3 mb-2">
              <div class="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                  for="grid-number"
                >
                  Your Phone Number
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[11px] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-number"
                  placeholder="+971-XX-1234567"
                  value={formik.values.number}
                  onChange={(e) => {
                    console.log(e.target.value);
                    formik.setFieldValue("number", e.target.value);
                  }}
                  type="telephone"
                />
                {formik.errors.number && (
                  <p className="text-[red] text-[14px] mb-[6px]">{formik.errors.number}</p>
                )}
              </div>

              <div class="w-full md:w-1/2  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-[12px] font-bold mb-2"
                  for="grid-role"
                >
                  Your role
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight rounded-[11px] focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-role"
                  type="text"
                  placeholder="-Select Your Role-"
                  value={formik.values.role}
                  onChange={(e) => {
                    console.log(e.target.value);
                    formik.setFieldValue("role", e.target.value);
                  }}
                />
                {formik.errors.role && (
                  <p className="text-[red] text-[14px] mb-[6px]">{formik.errors.role}</p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <Button
                className="px-[64px] py-[17px] bg-[#2C2C2C] rounded-[12px] text-[20px] font-bold text-[#FFFFFF] lg:w-[400px] w-[382px] hover:bg-black"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
          <div className="mt-5">{message}</div>
        </div>
      </div>
    </div>
  );
}

