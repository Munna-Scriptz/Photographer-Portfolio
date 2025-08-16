import React from 'react'
import DiscoverImg1 from '../assets/images/Headshot.png'
import DiscoverImg2 from '../assets/images/Maternity.png'
import DiscoverImg3 from '../assets/images/Weeding.png'
import DiscoverImg4 from '../assets/images/Portrait.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router'

const Discover = () => {
  return (
    <>
        <section id='Discover' className='lg:mt-[270px] mt-[112px]'>
            <div className="container">
                {/* --------Header------- */}
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-cormorant lg:text-[72px] text-[52px] lg:w-[419px] w-full text-center font-medium lg:leading-[70px] leading-[50px] text-secondBK'>Discover my <span className='italic'>featured</span> <span className='TextUnderline italic'>Works</span></h2>
                    <ul className='flex items-center lg:gap-[47px] gap-4 mt-[48px] font-inter lg:text-[18px] text-sm'>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>All</button></li>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>Maternity</button></li>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>Portrait</button></li>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>Travel</button></li>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>Weeding</button></li>
                        <li><button className='cursor-pointer hover:text-brand duration-150'>Others</button></li>
                    </ul>
                </div>
                {/* --------Images------- */}
                <div className='flex lg:flex-row flex-col items-center gap-[34px]'>
                    <div className='lg:mt-[176px] mt-5'><img src={DiscoverImg1} alt="image" /></div>
                    <div className='lg:mt-[64px] mt-5'><img src={DiscoverImg2} alt="image" /></div>
                    <div className='lg:mt-[226px] mt-5'><img src={DiscoverImg3} alt="image" /></div>
                    <div className='lg:mt-[92px] mt-5'><img src={DiscoverImg4} alt="image" /></div>
                </div>
                {/* --------Bottom Link------- */}
                <div className='flex items-center justify-center mt-[48px]'>
                    <Link className='cursor-pointer font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>View All Works <FaLongArrowAltRight /></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Discover