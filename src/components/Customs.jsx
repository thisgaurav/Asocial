import React from 'react'

const Customs = () => {
  return (
    <div className='min-h-[97vh] bg-cover bg-[url("./images/custom-banner.jpg")] flex flex-col lg:flex-row font-["Poppins"] py-24 lg:py-[100px] px-8 sm:px-20 lg:px-16 xl:px-36 gap-5 items-center'>
      <div className='left w-full lg:w-1/2 flex flex-col lg:pr-32 justify-center gap-10'>
        <div className="top-heading text-[#D67AEA] flex flex-col gap-4">
          <div className='splash-heading relative'>
            <h2 className='font-["Boughies"] text-5xl sm:text-7xl z-20'>Customs</h2>
            <img src="./images/white-splash.svg" className='-z-10' alt="" />
          </div>
        </div>
        <div className="btm-heading flex flex-col">
          <h1 className='text-[50px] leading-[65px] font-semibold text-[#212529] pb-2.5'>Customs Interests & create your own interests</h1>
          <p className='text-[#A8A8A8] font-medium leading-[30px]'>Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations. With this cutting-edge capability, users can engage in video calls without revealing their personal information, fostering a sense of confidentiality and freedom. Introducing our revolutionary anonymous video calling feature, designed to prioritize privacy and provide a secure space for candid conversations.</p>
        </div>
      </div>
      <div className='right w-full lg:w-1/2 flex'>
        <img className='' src="./images/customimg.png" alt="" />
      </div>
    </div>
  )
}

export default Customs