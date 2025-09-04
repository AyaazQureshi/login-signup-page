import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const[confirmPass,setConfirmPass] = useState(false);

  const [accountType,setAccountType] = useState("student");

  let navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    navigate("/Dashboard");
  }

  return (
    <div className="">
      {/* student instructor tab */}
      <div className="flex bg-gray-800 p-1 rounded-full gap-x-1 my-2 max-w-max">
        <button className={`${accountType==="student" ? "bg-black text-gray-200" : "bg-transparent text-gray-700"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>Student</button>
        <button className={`${accountType==="instructor" ? "bg-black text-gray-200" : "bg-transparent text-gray-700"} py-2 px-5 
        rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first and last  name */}
        <div className="flex gap-x-3 mt-[8px]">
          <label className="w-full" for="">
            <p className="text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-600">*</sup>
            </p>
            <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300'
              type="text"
              placeholder="Enter First Name"
              required
              name="firstname"
              value={FormData.firstname}
              onChange={changeHandler}
            />
          </label>

          <label className="w-full" for="">
            <p className="text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]">
              last Name <sup className="text-red-600">*</sup>
            </p>
            <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300'
              type="text"
              placeholder="Enter Last Name"
              required
              name="lastname"
              value={FormData.lastname}
              onChange={changeHandler}
            />
          </label>
        </div>

        {/* email add */}
        <div className="mt-[8px]">
            <label className="w-full " for="">
          <p className="text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-600">*</sup>
          </p>
          <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300'
            type="email"
            placeholder="Enter Email Address "
            required
            name="email"
            value={FormData.email}
            onChange={changeHandler}
          />
        </label>
        </div>
        

        {/* create pass and confirm pass */}
        <div className=" w-full flex gap-x-4 mt-[8px]">
          <label className="relative" for="">
            <p className="text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]">
              Create password <sup className="text-red-600">*</sup>
            </p>
            <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300'
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password "
              required
              name="password"
              value={FormData.password}
              onChange={changeHandler}
            />
            <span className='absolute right-3 top-[40px] cursor-pointer'  onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>

          <label className="relative" for="">
            <p className="text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]">
              Confirm password <sup className="text-red-600">*</sup>
            </p>
            <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300'
              type={confirmPass ? "text" : "password"}
              placeholder="Confirm Password "
              required
              name="confirmPassword"
              value={FormData.confirmPassword}
              onChange={changeHandler}
            />
            <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => setConfirmPass((prev) => !prev)}>
              {confirmPass ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button className=" w-full bg-yellow-400 text-black text-center rounded-[8px] font-medium px-[12px] py-[8px] mt-3 ">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
