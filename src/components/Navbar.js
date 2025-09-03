import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/">
        <img src={logo} width={160} height={32} loading='lazy' alt="logo"/>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-gray-100'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                <button className='bg-gray-800 text-gray-100 px-[10px] py-[3px] rounded-[8px] border border-gray-500'> Login</button>
                </Link>
            }
             { !isLoggedIn &&
                <Link to="/signup">
                <button className='bg-gray-800 text-gray-100 px-[10px] py-[3px] rounded-[8px] border border-gray-500'>Signup</button>
                </Link>
            }
             { isLoggedIn &&
                <Link to="/">
                <button className='bg-gray-800 text-gray-100 px-[10px] py-[3px] rounded-[8px] border border-gray-500' onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success("logged Out")   
                }}>Log Out</button>
                </Link>
            }
             { isLoggedIn &&
                <Link to="/dashboard">
                <button className='bg-gray-800 text-gray-100 px-[10px] py-[3px] rounded-[8px] border border-gray-500'>Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar