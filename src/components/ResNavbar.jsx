import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa6";
const ResNavbar = () => {
    const [navMenu = showNavMenu] = useState(false)
  return (
    <>
        <nav className='absolute top-0 left-0 py-[29px] px-[20px] w-full lg:hidden block'>
            <div className="container">
                <div id="NavRow" className='flex items-center justify-between'>
                        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        {/* <ul className='flex items-center gap-[30px] text-white font-inter text-base opacity-[0.8]'>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>About</Link></li>
                            <li><Link to={"/"}>Services</Link></li>
                            <li><Link to={"/"}>Contact</Link></li>
                        </ul> */}
                    <div>
                        <FaBars onClick={()=>showNavMenu(!navMenu)} className='text-white text-[32px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </nav>
    </>
  )
}

export default ResNavbar