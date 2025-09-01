import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate(false);

    const [formData,setFormData] = useState(
        {email:"",password:""}
    )

    const [showPassword,setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData((prevData)=>(
            {...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/Dashboard")
    }

  return (
    <form className='flex flex-col w-full gap-y-3 mt-6' onSubmit={submitHandler}>
        <label className='w-full' for="">
            <p className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address <sup className='text-red-600'>*</sup></p>
              <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300' type="email" name="email"  placeholder='Enter Email Address'  required value={formData.email} onChange={changeHandler}/>
        </label>

        <label className='w-full relative' for="">
            <p className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Password <sup className='text-red-600'>*</sup></p>
              <input className='bg-gray-700 rounded-[0.5rem] text-gray-300 w-full p-[12px] border-b border-b-gray-300' type={showPassword ? ("text") : ("password")} name="password" placeholder='Enter Password'  required value={formData.password} onChange={changeHandler}/>

              <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>
            {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={22} fill='#AFB2BF' />)}
        </span>
        
        <Link to="#"><p className='text-blue-600 text-xs mt-1 max-w-max ml-auto'>Forget Password</p></Link>
        </label>

        

        <button className='bg-yellow-400 text-black text-center rounded-[8px] font-medium px-[12px] py-[8px] mt-3 '> Sign In</button>
      
    </form>
  )
}

export default LoginForm