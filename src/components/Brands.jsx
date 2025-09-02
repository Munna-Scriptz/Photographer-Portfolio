import React from 'react'
import brand1 from '../assets/images/Brand1.png'
import brand2 from '../assets/images/Brand2.png'
import brand3 from '../assets/images/Brand3.png'
import brand4 from '../assets/images/Brand4.png'
import brand5 from '../assets/images/Brand5.png'
import brand6 from '../assets/images/Brand6.png'
import brand7 from '../assets/images/Brand7.png'
import brand8 from '../assets/images/Brand8.png'

const Brands = () => {
  return (
    <>
        <section id='Brands' className='lg:my-[120px] mt-[80px]'>
            <div className="container">
                <div className='flex lg:flex-row items-center justify-center flex-wrap gap-[30px]'>
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand1} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand2} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand3} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand4} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand5} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand6} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand7} alt="Brands" />
                    <img data-aos="fade-up" className='lg:w-fit w-[140px]' src={brand8} alt="Brands" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands