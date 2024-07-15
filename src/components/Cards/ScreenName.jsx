import React, { useState } from 'react'

  const ScreenName = ({pageChange}) => {
  const isActive = true
  const activeGradient = `bg-gradient-to-r from-[#fd4e86] to-[#d67bec] border-none text-white`
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5`

  const[dob, setDob] = useState("")
  const[name,setName] = useState("")

  const handleNameChange=(e)=>{
    setName(e.target.value)
  }

  const handleChange=(e)=>{
    setDob(e.target.value)
  }

  localStorage.setItem('dob',dob)
  localStorage.setItem('name',name)

  const handleSubmit=(e)=>{
    e.preventDefault()
    const today = new Date();
    const birthday = new Date(dob);
    const age = today.getFullYear() - birthday.getFullYear();

    if(age<18){
      alert("you are under aged")
    }
    else{
      pageChange('signingender')
    }
  };
  return (
    <>
      <div className="progress w-full relative">
        <div className="line border-[1px] border-[#00000050] border-dashed w-full absolute top-[40%]"></div>
        <div className='flex justify-between relative'>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('name'))} className={`w-14 h-14 text-xl border-[#00000050] ${isActive ? `text-white` : `text-[#00000050]`} bg-white border-2 rounded-[50%] flex items-center justify-center ${isActive && activeGradient}`}>1</button>
            <p className={` text-xs ${isActive && `text-[#D67AEA]`} font-medium`}>Name</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('signingender'))} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000050]  bg-white border-2 rounded-[50%] flex items-center justify-center`}>2</button>
            <p className='text-[#00000070] text-xs font-medium'>Gender</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('signinavatar'))} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>3</button>
            <p className='text-[#00000070] text-xs font-medium'>Avatar</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('interest'))} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>4</button>
            <p className='text-[#00000070] text-xs font-medium'>Interests</p>
          </div>
        </div>

      </div>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6'>
      <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[30px]'>Your Screen Name</h3>
      <div className='flex flex-col gap-3'>
        <label htmlFor="userName" className='text-[#00000050] text-[18px] font-medium'>Enter your Name.</label>
        <div className='border-[1px] border-[#00000040] flex justify-between p-[17px] h-18 rounded-[20px] gap-5'>
          <img src="./images/username.svg" className='border-r-2 border-[#DEDEDE] pr-4' alt="" />
          <input type="text" className='border-0 w-full h-full  text-lg outline-none' required minLength={3} onChange={handleNameChange} value={name} />
        </div>
      </div>
      <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[30px]'>Date of Birth</h3>
      <div className='flex flex-col gap-3'>
        <label htmlFor="userName" className='text-[#00000050] text-[18px] font-medium'>You must be 18 or older to use Asocial</label>
        <div className='border-[1px] border-[#00000040] flex justify-between p-[17px] h-18 rounded-[20px] gap-5'> 
          <img src="./images/calender.svg" className='border-r-2 border-[#DEDEDE] pr-4' alt="" />
          <input type="date" className='border-0 w-full h-full  text-lg outline-none' value={dob}
          onChange={handleChange} required/>
        </div>
      </div>
      <button type="submit" className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Submit</button>
      </form>
    </>
  )
}


export default ScreenName