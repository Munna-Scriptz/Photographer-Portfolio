import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router'
const Footer = () => {
  return (
    <>
        <footer className='bg-secondBK w-full mt-[100px] py-[120px]'>
            <div className='container'>
                <div id="FooterRow" className='flex items-center justify-center flex-col'>
                    <div><img className='w-[128px]' src={Logo} alt="Logo" /></div>
                    <p className='font-inter text-base opacity-[0.8] text-white mt-[16px]'>© 2022 Elliana Mary  All Rights Reserved</p>
                    {/* -------------Border Line------------- */}
                    <div id='FooterBorder' className='relative w-full mt-[47px]'>
                        <ul className='flex items-center justify-center gap-[70px] text-white opacity-80 py-[36px]'>
                            <li><Link to={'/'}>About</Link></li>
                            <li><Link to={'/'}>Project</Link></li>
                            <li><Link to={'/'}>Blog</Link></li>
                            <li><Link to={'/'}>Pricing</Link></li>
                            <li><Link to={'/'}>Studio</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center justify-center gap-[70px] text-white opacity-80 py-[36px]'>
                            <li><Link to={'/'}>Facebook</Link></li>
                            <li><Link to={'/'}>Twitter</Link></li>
                            <li><Link to={'/'}>Instagram</Link></li>
                            <li><Link to={'/'}>Linkedin</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer