import React from 'react'
import ContactImage1 from '../assets/images/ContactImg1.png'
import ContactImage2 from '../assets/images/ContactImg2.png'
import HandIMg from '../assets/images/HandIcon.png'
import AwardsImg from '../assets/images/AwardImg.png'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
        <section id="contact" className='lg:mt-0 mt-[80px]'>
            <div className="container">
                <div id="contactRow">
                    <div className='flex lg:flex-row flex-col items-center gap-[38px]'>
                        <div className='lg:w-[452px] w-full'>
                            <h2 className='font-cormorant lg:text-[72px] text-[52px] font-medium leading-[62px] text-secondBK'>I enjoy <span className='TextUnderline italic'>capturing</span> people</h2>
                            <p className='font-oswald font-semibold text-secondBK text-[24px] mt-[38px] text-end'>-Ellina mary</p>
                            <img className='mt-[69px]' src={ContactImage1} alt="Image" />
                        </div>
                        <div>
                            <img src={ContactImage2} alt="Image" />
                        </div>
                    </div>
                    <div className='mt-[61px] flex lg:flex-row flex-col items-center justify-between'>
                        <h2 className='font-cormorant font-bold text-[24px] flex items-center gap-[16px]'>Hi there! <img src={HandIMg} alt="icon" /></h2>
                        <p className='font-inter text-[20px] lg:w-[431px] w-full opacity-[0.7] lg:my-0 my-5'>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you  free.</p>
                        <div>
                            <p className='font-inter text-[20px] lg:w-[431px] w-full opacity-[0.7] mb-[40px]'>You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>
                            <Link to={'/'} className='text-brand font-inter font-semibold text-[18px] flex items-center gap-[12px]'>Contact with Me <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
                {/* ----------------Awards------------- */}
                <div className='lg:mt-[150px] mt-[100px] flex lg:flex-row flex-col items-center'>
                    <h2 className='font-cormorant text-[72px] lg:w-[313px] lg:mb-0 mb-10 font-medium leading-[62px] text-secondBK'>Got many valuable <span className='TextUnderline italic'>awards</span></h2>
                    <div className='flex lg:flex-row flex-col items-center lg:gap-[60px] gap-10'>
                        <img src={AwardsImg} alt="Awards" />
                        <ul className='flex flex-col gap-[20px] text-secondBK font-inter text-[20px]'>
                            <li><button className='cursor-pointer hover:text-brand duration-100'>2021 - The Artist Award</button></li>
                            <li><button className='cursor-pointer hover:text-brand duration-100'>2020 - MKEL/Best Prir</button></li>
                            <li><button className='cursor-pointer hover:text-brand duration-100'>2019 - Portrait Award</button></li>
                            <li><button className='cursor-pointer hover:text-brand duration-100'>2018 - Berlin Talent</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactMe