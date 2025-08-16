import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";
import ReviewImg from '../assets/images/ReviewImg.png'
const Reviews = () => {
  return (
    <>
        <section id='Reviews' className='mt-[270px]'>
            <div className="container">
                {/* --------Header------- -- */}
                <div className='flex lg:flex-row flex-col items-center justify-between'>
                    <h2 className='font-cormorant lg:text-[72px] text-[52px] lg:w-[442px] w-full font-medium lg:leading-[62px] leading-[50px] lg:text-start text-center text-secondBK'>Lovely <span className='TextUnderline italic'>words</span> from my clients </h2>
                    <Link className='cursor-pointer lg:mt-0 mt-10 font-inter font-semibold text-[18px] TextUnderline text-brand duration-150 flex items-center gap-[12px]'>View All Works <FaLongArrowAltRight /></Link>
                </div>
                {/* --------Reviews------- -- */}
                <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-[100px] gap-[50px] mt-[48px]'>
                    <img src={ReviewImg} alt="Reviews Img" />
                    <div className='lg:w-[500px] w-full'>
                        <p className='lg:text-[24px] text-lg font-inter lg:leading-[40px] leading-[30px]'>"<span className='font-semibold'>Jenifer lucous</span> is Just an awesome photographer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive, My entire family was impressed by her and photographs.</p>
                        <h2 className='font-oswald text-[24px] mt-[40px] font-semibold uppercase'>-Jason & Guidry</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews