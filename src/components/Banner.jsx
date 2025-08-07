import React from 'react'
import { Link } from 'react-router'
import BannerRotateTextImg from '../assets/images/BannerRotateImg.png'
import RotateText from '../assets/images/RotateTextImg.png'

const Banner = () => {
  return (
    <>
        <section id='Banner' className='pb-[100px]'>
            <div className="container">
                <div id="BannerRow" className='pt-[148px] flex justify-between items-end'>
                    {/* -------Left Side-------- */}
                    <div>
                        <h2 className='text-white text-[30px] font-semibold uppercase font-oswald'>Elliana Mary</h2>
                        <p className='text-white'>Professional Photographer</p>
                    </div>
                    {/* -------Right Side-------- */}
                    <div className='flex items-center gap-[100px]'>
                        <div className='w-[524px]'>
                            <h1 className='font-cormorant text-[96px] font-medium leading-[80px] text-white'>Love to <span className='TextUnderline italic'>capture</span> the best <span className='TextUnderline italic'>moments</span></h1>
                            <p className='mt-[40px] font-normal font-inter text-[18px] text-white opacity-[0.7]'>Distinctively re-engineer process-centric growth strategies without granular process improvements.</p>
                            <div className='mt-[76px]'>
                                <div className='relative'>
                                    <Link to={'/'}><img className='absolute top-[25%] left-[-15%] RotateText' src={RotateText} alt="Img" /></Link>
                                    <img src={BannerRotateTextImg} alt="Image" />
                                </div>
                            </div>
                        </div>
                        <ul className='flex flex-col items-center gap-[80px] text-white underline'>
                            <li className='rotate-[-90deg]'><Link to={"/"}>Linkedin</Link></li>
                            <li className='rotate-[-90deg]'><Link to={"/"}>Instagram</Link></li>
                            <li className='rotate-[-90deg]'><Link to={"/"}>Twitter</Link></li>
                            <li className='rotate-[-90deg]'><Link to={"/"}>Facebook</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner