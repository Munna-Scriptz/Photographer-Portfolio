import React from 'react'
import BookImg from '../assets/images/BookImg.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router';

const Book = () => {
  return (
    <>
        <section id='Book' className='mt-[150px]'>
            <div className='container'>
                <div id="BookRow" className='flex items-center gap-[100px]'>
                    <img src={BookImg} alt="Book" />
                    <div>
                        <h2 className='font-cormorant text-[64px] w-[380px] font-medium leading-[62px] text-secondBK'>Ready to make your <span className='TextUnderline italic'>moment memorable?</span></h2>
                        <div className='mt-[36px] flex items-end justify-between'>
                            <Link className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                            <div>
                                <p className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold text-[18px] flex items-center gap-[12px]'>514 905 9958</p>
                                <p className='cursor-pointer mt-[24px] TextUnderline font-inter font-semibold text-[18px] flex items-center gap-[12px]'>hello@support.com</p>
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