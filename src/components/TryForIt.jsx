import React from 'react'
function TryForIt() {
  return (
    <div className='min-h-[97vh] bg-cover bg-[url("./images/try_bg.png")] flex flex-col lg:flex-row font-["Poppins"] py-24 lg:py-[100px] px-8 sm:px-20 lg:px-16 xl:px-36 gap-5 items-center'>
      <div className='left w-full lg:w-1/2 flex flex-col lg:pr-32 justify-center gap-10'>
        <div className="top-heading text-[#D67AEA] flex flex-col gap-4">
          <div className='splash-heading relative'>
            <h2 className='font-["Boughies"] text-7xl z-20'>Try for free</h2>
            <img src="./images/white-splash.svg" className='' alt="" />
          </div>
        </div>
        <div className="btm-heading flex flex-col items-start gap-6">
          <h1 className='text-[50px] leading-[65px] font-semibold text-[#212529]'>Easily Connect video calling without sign up</h1>
          <p className='text-[#A8A8A8] font-medium leading-[30px]'>Video calling without sign-up refers to the ability to participate in video calls or conferences without the need to create an account or log in with personal credentials. This approach is designed to offer a more convenient and accessible experience for users who want to join a video meeting quickly without the commitment of registering for a platform.</p>
          <button className='bg-gradient-to-r from-[#fd4e86] to-[#d67bec] text-white px-[90px] rounded-xl py-[18px]'>Try for free</button>
        </div>
      </div>
      <div className='right w-full lg:w-1/2 flex'>
        <img className='' src="./images/try_image.png" alt="" />
      </div>
    </div>
  )
}

export default TryForIt