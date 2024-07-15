import React from 'react'

function Hero() {
  return (
    <div className=' bg-[url("./images/banner-bg.jpg")] flex-shrink flex flex-col lg:flex-row font-["Poppins"] py-24 lg:py-[100px] px-8 sm:px-20 lg:px-16 xl:px-36 gap-5 items-center'>
      <div className='left w-full lg:w-1/2 flex flex-col justify-start lg:justify-center gap-10'>
        <div className="top-heading text-[#D67AEA] flex flex-col gap-4">
          <h2 className='text-xl font-medium'>Best video calling around the world</h2>
          <div className='splash-heading relative'>
            <h2 className='font-["Boughies"] text-[50px] sm:text-[55px] z-[99999999]'>Anonymous</h2>
            <img src="./images/white-splash.svg" className=' z-0' alt="" />
          </div>
        </div>
        <div className="btm-heading flex flex-col items-start gap-6">
          <h1 className='text-[4.4vw] leading-none font-semibold text-[#212529]'>Video Calling & chat</h1>
          <p className='text-[#A8A8A8] leading-[24px]'>Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations. With this cutting-edge capability, users can engage in video calls without revealing their personal information, fostering a sense of confidentiality and freedom.</p>
          <button className='bg-gradient-to-r from-[#fd4e86] to-[#d67bec] text-white px-[90px] rounded-xl py-[18px]'>Login</button>
        </div>
      </div>
      <div className='right w-full lg:w-1/2 flex'>
        <img className='image' src="./images/banner_img.png" alt="" />
      </div>
    </div>
  )
}

export default Hero