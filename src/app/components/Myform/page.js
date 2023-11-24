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



export default function page() {

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [number, setNumber] = useState(''); 
  const [school, setSchool] =useState('');
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false); 

  useEffect(() => { 
      validateForm(); 
  }, [name, email, school, number]); 
  // Validate form 
  const validateForm = () => { 
      let errors = {}; 

      if (!name) { 
          errors.name = 'Name is required.'; 
      } else if (!/\S+@\S+\.\S+/) { 
        errors.email = 'Name is invalid.'; 
    } 

      if (!email) { 
          errors.email = 'required.'; 
      } 

      if (!school) { 
        errors.school = 'required.'; 
    } else if (!/\S+@\S+\.\S+/) { 
      errors.school = 'Name is invalid.'; 
  } 

      if (!number) { 
          errors.number = 'Number is required.'; 
      } else if (number.length < 10) { 
          errors.number = 'number must be 10 digits.'; 
      }if (!number) {
          errors.number = 'Number is required.';
        } else if (/[^0-9]/.test(number)){
        errors.number = 'Enter valid digits';
     }


      setErrors(errors); 
      setIsFormValid(Object.keys(errors).length === 0); 
  }; 

  async function handleSubmit(e){
    e.preventDefault();
    const formData ={};

    Array.from(e.currentTarget.elements).forEach(field =>{
      if(!field.name) return;
      formData[field.name] = field.values;
    });

    console.log(formData);
  }
 

  return (
    <div className="lg:flex lg:justify-center lg:items-center h-screen">
      <div className="flex flex-col lg:flex lg:flex-row lg:justify-center lg:items-center shadow-[-4px_0px_41px_0px_rgba(8,_10,_9,_0.11)] lg:w-[900px] lg:h-[742px] md:h-screen md:w-screen w-screen h-screen rounded-[30px] bg-[#FFF]">
        <div className="w-screen h-[90px] lg:w-[394px]  md:w-screen  lg:h-[742px] bg-[#2C2C2C] lg:flex lg:flex-col lg:justify-center  lg:items-center lg:rounded-l-[30px]">
          
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
          <form class="flex flex-col">
            <div className="">
              <p className="text-[#060606] text-[24px] lg:text-[32px] font-extrabold">
                Digitize your school in minutes with Apaar integrated platform
              </p>
            </div>
            <div class="mb-6 mt-10">
              <div class="w-full  mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                > {errors.password && <p style={styles.error}>{errors.password}</p>} 
                  Your Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[11px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  YOUR
                  NAME
                  placeholder="Enter  Your Name"
                  style={styles.input} 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}
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
                      control={<Radio />}
                      label="Independent school"
                      className="text-[#7E92A2] text-[14px] font"
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                    <FormControlLabel
                      value="Group school"
                      control={<Radio />}
                      label="Group school"
                      className="text-[#7E92A2] text-[14px] font"
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </RadioGroup>
                  {errors.email && <p style={styles.error}>{errors.email}</p>} 
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
                  onChange={(e) => setSchool(e.target.value)} 
                />
                {errors.school && <p style={styles.error}>{errors.school}</p>} 
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
                  onChange={(e) => setNumber(e.target.value)} 
                  type="telephone"
                />
                 {errors.number && <p style={styles.error}>{errors.number}</p>} 
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
                />
              </div>
            </div>
          </form>
          <div className="mt-5">
            <Button className="px-[64px] py-[17px] bg-[#2C2C2C] rounded-[12px] text-[20px] font-bold text-[#FFFFFF] lg:w-[400px] w-[382px] hover:bg-black" 
                    input type='submit' onClick={(e)=>{handleSubmit(e)}}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = { 
  container: { 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0', 
  }, 
  heading: { 
      fontWeight: 'bold', 
      fontSize: '25px', 
      color: "green", 
      textAlign: "center", 
  }, 
  subHeading: { 
      fontWeight: 'bold', 
      fontSize: '25px', 
      textAlign: "center", 

  }, 
  form: { 
      backgroundColor: '#fff', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
      width: '100%', 
      maxWidth: '400px', 
      margin: '0 auto', 
  }, 
  input: { 
      width: '100%', 
      padding: '12px', 
      marginBottom: '12px', 
      border: '1px solid #ccc', 
      borderRadius: '10px', 
      fontSize: '16px', 
      transition: 'border-color 0.2s ease', 
  }, 
  // button: { 
  //     backgroundColor: 'green', 
  //     color: '#fff', 
  //     fontWeight: 'bold', 
  //     fontSize: '16px', 
  //     padding: '12px', 
  //     border: 'none', 
  //     borderRadius: '10px', 
  //     cursor: 'pointer', 
  //     width: '40%', 
  //     transition: 'opacity 0.2s ease', 
  // }, 
  error: { 
      color: 'red', 
      fontSize: '14px', 
      marginBottom: '6px', 
  }, 
}
