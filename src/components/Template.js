import React from 'react'
import Signup from '../Pages/Signup'
import frameImage from "../Assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";


const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex  justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
          <h1 className='text-gray-200 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-slate-300'>{desc1}</span>
            <br/>
            <span className='text-blue-300 italic'>{desc2}</span>
          </p>
          {formtype==="signup" ?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>) 
          }

          <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='h-[1px] w-full bg-gray-500'></div>
            <p className='text-gray-400 font-medium leading-[1.375rem]'>OR</p>
            <div className='h-[1px] w-full bg-gray-500'></div>
          </div>

          <button className='w-full flex gap-x-2 mt-6 items-center justify-center bg-black rounded-[8px] font-medium text-gray-400 border border-gray-400 px-[12px] py-[8px] '>
            <FcGoogle />
            <p>Sign up with Google</p>
          </button>
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage} width={558} height={504} loading='lazy' alt="pattern"/>
            <img className='absolute -top-4 right-4' src={image} width={490} height={504} loading='lazy' alt="students"/>

        </div>

    </div>
  )
}

export default Template