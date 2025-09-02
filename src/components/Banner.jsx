import React from 'react'
import { Link } from 'react-router'
import BannerRotateTextImg from '../assets/images/BannerRotateImg.png'
import RotateText from '../assets/images/RotateTextImg.png'

const Banner = () => {
  return (
    <>
        <section id='Banner' className='pb-[60px] md:pb-[100px] overflow-hidden'>
            <div className="container mx-auto px-4">
                <div id="BannerRow" className='pt-[80px] md:pt-[148px] flex flex-col md:flex-row justify-between items-end gap-10 md:gap-0'>
                    {/* -------Left Side-------- */}
                    <div className="mb-8 md:mb-0 flex-shrink-0">
                        <h2 data-aos="fade-right" className='text-white text-[24px] md:text-[30px] font-semibold uppercase font-oswald'>Elliana Mary</h2>
                        <p data-aos="fade-right" className='text-white text-[16px] md:text-base'>Professional Photographer</p>
                    </div>
                    {/* -------Right Side-------- */}
                    <div className='flex md:flex-row flex-col items-center md:items-end gap-8 md:gap-[100px]'>
                        <div className='w-full md:w-[524px]'>
                            <h1 data-aos="fade-left" className='font-cormorant text-[40px] md:text-[96px] font-medium leading-[44px] md:leading-[80px] text-white'>Love to <span className='TextUnderline italic'>capture</span> the best <span className='TextUnderline italic'>moments</span></h1>
                            <p data-aos="fade-left" className='mt-[24px] md:mt-[40px] font-normal font-inter text-[16px] md:text-[18px] text-white opacity-[0.7]'>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
                            <div data-aos="fade-left" className='mt-[36px] md:mt-[76px]'>
                                <div className='relative flex justify-center'>
                                    <Link to={'/'}><img className='absolute lg:top-[25%] lg:left-[-15%] left-[20%] RotateText w-[70px] lg:w-[161px]' src={RotateText} alt="Img" /></Link>
                                    <img className='w-[120px] md:w-auto' src={BannerRotateTextImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <ul data-aos="fade-left" className='flex flex-row md:flex-col items-center gap-6 md:gap-[80px] text-white underline mb-6 md:mb-0'>
                            <li className='rotate-0 md:rotate-[-90deg]'><Link to={"/"}>Linkedin</Link></li>
                            <li className='rotate-0 md:rotate-[-90deg]'><Link to={"/"}>Instagram</Link></li>
                            <li className='rotate-0 md:rotate-[-90deg]'><Link to={"/"}>Twitter</Link></li>
                            <li className='rotate-0 md:rotate-[-90deg]'><Link to={"/"}>Facebook</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner