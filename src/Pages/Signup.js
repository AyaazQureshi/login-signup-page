import React from 'react'
import Template from '../components/Template'
import signupImg from "../Assets/signup.webp"

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
     <Template 
       title="join the millions learning to code with studyNotion for free"
        desc1="build skills for today,tomorrow and beyond"
        desc2="Education to future proof your carrer"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
     />
    </div>
  )
}

export default Signup