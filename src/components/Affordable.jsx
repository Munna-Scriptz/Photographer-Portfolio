import React from 'react'
import { Link } from 'react-router'
import { FaLongArrowAltRight } from "react-icons/fa";

const Affordable = () => {
  return (
    <>
        <section id='Affordable' className='mt-[150px]'>
            <div className="container">
                {/* ----------Header---------- */}
                <div className='flex items-center justify-center'>
                    <h2 className='font-cormorant text-[72px] w-[360px] font-medium leading-[62px] text-secondBK'>Affordable <span className='TextUnderline italic'>pricing plan</span></h2>
                </div>
                {/* ----------Price Card---------- */}
                <div className='mt-[64px] flex items-center justify-center flex-wrap'>
                    <div className='w-[445px] pr-[40px] pb-[40px] border-r-1 border-b-1 border-[#0b010934]'>
                        <h2 className='font-oswald font-medium text-[30px] uppercase flex items-center justify-between'>Maternity <span className='text-brand font-cormorant font-semibold italic text-[40px]'>$500</span></h2>
                        <p className='font-dmSans mt-[20px] text-secondBK text-[18px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                        <Link className='cursor-pointer mt-[24px] font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                    </div>
                    <div className='w-[445px] pl-[40px] pb-[40px] border-b-1 border-[#0b010934]'>
                        <h2 className='font-oswald font-medium text-[30px] uppercase flex items-center justify-between'>Portrait <span className='text-brand font-cormorant font-semibold italic text-[40px]'>$500</span></h2>
                        <p className='font-dmSans mt-[20px] text-secondBK text-[18px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                        <Link className='cursor-pointer mt-[24px] font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                    </div>
                    <div className='w-[445px] pr-[40px] pt-[40px] border-r-1 border-[#0b010934]'>
                        <h2 className='font-oswald font-medium text-[30px] uppercase flex items-center justify-between'>Travel <span className='text-brand font-cormorant font-semibold italic text-[40px]'>$500</span></h2>
                        <p className='font-dmSans mt-[20px] text-secondBK text-[18px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                        <Link className='cursor-pointer mt-[24px] font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                    </div>
                    <div className='w-[445px] pl-[40px] pt-[40px]'>
                        <h2 className='font-oswald font-medium text-[30px] uppercase flex items-center justify-between'>Weeding <span className='text-brand font-cormorant font-semibold italic text-[40px]'>$500</span></h2>
                        <p className='font-dmSans mt-[20px] text-secondBK text-[18px]'>The package includes up to two hours photo shoot in our studio. All pictures will be retouched. More than 100 pictures shared in individual gallery online.</p>
                        <Link className='cursor-pointer mt-[24px] font-inter font-semibold text-[18px] text-brand duration-150 flex items-center gap-[12px]'>Book Now<FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Affordable