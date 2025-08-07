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
                <div className='flex items-center justify-between'>
                    <h2 className='font-cormorant text-[72px] w-[442px] font-medium leading-[62px] text-secondBK'>Lovely <span className='TextUnderline italic'>words</span> from my clients </h2>
                    <Link className='cursor-pointer font-inter font-semibold text-[18px] TextUnderline text-brand duration-150 flex items-center gap-[12px]'>View All Works <FaLongArrowAltRight /></Link>
                </div>
                {/* --------Reviews------- -- */}
                <div className='flex items-center justify-center gap-[100px] mt-[48px]'>
                    <img src={ReviewImg} alt="Reviews Img" />
                    <div className='w-[500px]'>
                        <p className='text-[24px] font-inter leading-[40px]'>"<span className='font-semibold'>Jenifer lucous</span> is Just an awesome photographer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive, My entire family was impressed by her and photographs.</p>
                        <h2 className='font-oswald text-[24px] mt-[40px] font-semibold uppercase'>-Jason & Guidry</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviews