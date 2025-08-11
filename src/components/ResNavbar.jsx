import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa6";
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
            <div className={`bg-[#1e1e1e] w-[250px] h-screen absolute duration-[.8s] top-0 z-10 flex items-center justify-center ${navMenu? 'left-0' : 'left-[600px]'}`}>
                <ul className='flex flex-col items-center gap-[30px] text-white font-inter text-base opacity-[0.8]'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Services</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default ResNavbar