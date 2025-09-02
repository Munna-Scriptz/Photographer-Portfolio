import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
        <nav data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className='absolute top-0 left-0 py-[29px] w-full lg:block hidden'>
            <div className="container">
                <div id="NavRow" className='flex items-center justify-between'>
                    <div className='flex items-center gap-[129px]'>
                        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        <ul className='flex items-center gap-[30px] text-white font-inter text-base opacity-[0.8]'>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/"}>About</Link></li>
                            <li><Link to={"/"}>Services</Link></li>
                            <li><Link to={"/"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <FaBars className='text-white text-[32px] cursor-pointer'/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar