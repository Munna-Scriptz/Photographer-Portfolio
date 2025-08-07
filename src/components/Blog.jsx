import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import BlogImg1 from '../assets/images/BlogImg1.png'
import BlogImg2 from '../assets/images/BlogImg2.png'
import BlogImg3 from '../assets/images/BlogImg3.png'
const Blog = () => {
  return (
    <>
        <section id='Blog' className='mt-[150px]'>
            <div className="container">
                {/* ------------Header-------------- */}
                <div className='flex items-center justify-between'>
                    <h2 className='font-cormorant text-[64px] w-[380px] font-medium leading-[62px] text-secondBK'>Latest <span className='TextUnderline italic'>Blog</span></h2>
                    <Link className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>View All Blog<FaLongArrowAltRight /></Link>
                </div>
                {/* ------------Blog Items-------------- */}
                <div className='mt-[48px] flex items-center justify-between'>
                    <div>
                        <div className='flex items-start flex-col'>
                            <img src={BlogImg1} alt="image" />
                            <ul className='font-inter ml-4 text-[16px] text-secondBK font-normal flex items-center gap-[24px] opacity-[0.6] mt-[24px]'>
                                <li className=' list-disc'>05 Feb, 2022</li>
                                <li className=' list-disc'>5 min</li>
                            </ul>
                            <p className='font-cormorant text-[30px] font-bold mt-2 w-[381px]'>Speech has never been free, and  that’s good</p>
                        </div>
                        <div className='flex items-start flex-col mt-[48px]'>
                            <img src={BlogImg2} alt="image" />
                            <ul className='font-inter ml-4 text-[16px] text-secondBK font-normal flex items-center gap-[24px] opacity-[0.6] mt-[24px]'>
                                <li className=' list-disc'>05 Feb, 2022</li>
                                <li className=' list-disc'>5 min</li>
                            </ul>
                            <p className='font-cormorant text-[30px] font-bold mt-2 w-[381px]'>Speech has never been free, and  that’s good</p>
                        </div>
                    </div>
                        {/* --------Right Side Blog Item-------- */}
                        <div>
                            <div className='flex items-start flex-col mt-[48px]'>
                                <img src={BlogImg3} alt="image" />
                                <ul className='font-inter ml-4 text-[16px] text-secondBK font-normal flex items-center gap-[24px] opacity-[0.6] mt-[24px]'>
                                    <li className=' list-disc'>05 Feb, 2022</li>
                                    <li className=' list-disc'>5 min</li>
                                </ul>
                                <p className='font-cormorant text-[40px] font-bold mt-2 w-[508px]'>Speech has never been free, and  that’s good</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog