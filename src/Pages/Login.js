import React from 'react'
import Template from '../components/Template'
import LoginnImg from "../Assets/loginn.webp"

const Login = ({setIsLoggedIn}) => {
  
  return (
    <div>
      <Template 
        title="Welcome Back"
        desc1="build skills for today,tomorrow and beyond"
        desc2="Education to future proof your carrer"
        image={LoginnImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login