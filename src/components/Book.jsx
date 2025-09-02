import React from 'react'
import BookImg from '../assets/images/BookImg.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router';

const Book = () => {
  return (
    <>
        <section id='Book' className='mt-[150px] overflow-hidden'>
            <div className='container'>
                <div id="BookRow" className='flex lg:flex-row flex-col items-center lg:gap-[100px] gap-10'>
                    <img data-aos="fade-right" src={BookImg} alt="Book" />
                    <div>
                        <h2 data-aos="fade-left" className='font-cormorant lg:text-[64px] text-[48px] lg:w-[380px] font-medium lg:leading-[62px] leading-[50px] text-secondBK'>Ready to make your <span className='TextUnderline italic'>moment memorable?</span></h2>
                        <div data-aos="fade-left" className='mt-[36px] flex items-end justify-between'>
                            <Link className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold lg:text-[18px] text-sm text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                            <div>
                                <p className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold lg:text-[18px] text-sm flex items-center gap-[12px]'>514 905 9958</p>
                                <p className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold lg:text-[18px] text-sm flex items-center gap-[12px]'>hello@support.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Book