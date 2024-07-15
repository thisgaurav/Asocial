import React from 'react'

const AutoRoll = () => {
  return (
    <div className='bg-cover bg-[url("./images/autofill_bg.jpg")] flex flex-col-reverse lg:flex-row items-center py-32 lg:py-[100px] font-["Poppins"] px-8 sm:px-20 lg:px-16 gap-5'>
      <div className='left w-full lg:w-1/2 '>
        <img className=' scale-90' src="./images/auto_roll.png" alt="" />
      </div>
      <div className='right w-full lg:w-1/2 flex flex-col justify-center items-start text-white gap-10'>
        <div className="top-heading gap-4">
          <h2 className='font-["Boughies"] text-[60px] leading-none z-[99999999]'>Auto-roll</h2>
          <img src="./images/offwhite-splash.svg" className=' z-0' alt="" />
        </div>
        <div className="btm-heading flex flex-col items-start gap-3">
          <h1 className='text-[36px] lg:text-5xl leading-[65px] font-semibold'>Convenience and efficiency to the next level</h1>
            <p className='font-medium leading-[30px]'>Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations. With this cutting-edge capability, users can engage in video calls without revealing their personal information, fostering a sense of confidentiality and freedom.</p>
          <button className='bg-white text-[#D67AEA] px-16 rounded-xl py-3'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default AutoRoll