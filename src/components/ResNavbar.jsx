import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import logo from '../assets/images/Logo.png'
const ResNavbar = () => {
    const [navMenu , showNavMenu] = useState(false)
    console.log(navMenu)
  return (
    <>
        <nav className='absolute top-0 left-0 py-[29px] px-[20px] w-full lg:hidden block'>
            <div className="container">
                <div id="NavRow" className='flex items-center justify-between'>
                        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                    <div onClick={()=>showNavMenu(!navMenu)}>
                        <FaBars className='text-white text-[32px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className={`bg-[#1e1e1e] w-[250px] h-screen absolute duration-[.8s] top-0 z-10 ${navMenu? 'right-0' : 'right-[600px]'}`}>
                <div className='p-5 py-8 text-white flex items-center justify-between'>
                    <img className='w-[80px]' src={logo} alt="Logo" />
                    <ImCross onClick={()=>showNavMenu(!navMenu)} className='cursor-pointer'/>
                </div>
                <div className='flex items-center justify-center mt-20'>
                    <ul className='flex flex-col items-center gap-[30px] text-white font-inter text-base opacity-[0.8]'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>About</Link></li>
                        <li><Link to={"/"}>Services</Link></li>
                        <li><Link to={"/"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default ResNavbar