import React from 'react'

const Trials = ({pageChange}) => {
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `

  return (
      <>
        <div className='top-heading flex items-start flex-col gap-2'>
          <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[28px]'>Try For Free</h3>
          <h4 className=' text-[16px] text-[#00000060] font-medium'>Enter your details</h4>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="userName" className='text-[#00000040] text-[18px] font-medium'>Name</label>
          <div className='border-[1px] border-[#00000040] flex justify-between p-[17px] h-18 rounded-[20px] gap-5'>
            <img src="./images/username.svg" className='border-r-2 border-[#DEDEDE] pr-4' alt="" />
            <input type="text" className='border-0 w-full h-full  text-lg outline-none' />
          </div>
          
        </div>
        <h4 className=' text-[16px] text-[#00000060] font-medium'>Gender</h4>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center gap-3'>
            <div className="w-[152px] h-[132px] rounded-3xl flex bg-[lavender]  cursor-pointer border-[#d67aea] items-center justify-center border-2">
              <img src="./images/male.svg" alt="" />
            </div>
            <p>Male</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className="w-[152px] h-[132px] rounded-3xl flex bg-[lavender]  cursor-pointer items-center justify-center border-2">
              <img src="./images/female.svg" alt="" />
            </div>
            <p>Female</p>
          </div>
          <div className='flex flex-col items-center gap-3'>
            <div className="w-[152px] h-[132px] rounded-3xl flex bg-[lavender] cursor-pointer  items-center justify-center border-2">
              <img src="./images/Nonbinary.svg" alt="" />
            </div>
            <p>Non-Binary</p>
          </div>
        </div>
        <button type="button" class={`mt-10 text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`} onClick={() => (pageChange('welcome'))}>Submit</button>
      </>
  )
}

export default Trials