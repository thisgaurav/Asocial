import React from 'react'

const Creative = () => {
  return (
    <div className=' bg-[url("./images/creative_bg.jpg")] flex flex-col-reverse lg:flex-row items-center py-24 lg:py-[100px] font-["Poppins"] px-8 sm:px-20 lg:px-16 gap-5'>
      <div className='left w-full lg:w-1/2 '>

        <img className=' scale-90' src="./images/creative.png" alt="" />

      </div>
      <div className='right w-full lg:w-1/2 flex flex-col justify-center text-white gap-10'>

        <div className="top-heading flex flex-col gap-4">
          <div className='splash-heading relative'>
            <h2 className='font-["Boughies"] text-[60px] leading-none z-[99999999]'>Creative</h2>
            <img src="./images/offwhite-splash.svg" className=' z-0' alt="" />
          </div>
        </div>

        <div className="btm-heading flex flex-col items-start gap-6">
          <h1 className=' text-[36px] lg:text-5xl leading-[65px] font-semibold'>Creative Avatars & Upload your own image</h1>
          <div className='font-medium leading-[30px]'>
            <p>Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations. With this cutting-edge capability, users can engage in video calls without revealing their personal information, fostering a sense of confidentiality and freedom.</p>
            <p>Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations.</p>
          </div>
          <button className='bg-white text-[#D67AEA] px-12 rounded-xl py-3'>View</button>
        </div>

      </div>
    </div>
  )
}

export default Creative