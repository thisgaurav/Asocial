import React from 'react'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

const SignInGender = ({pageChange}) => {

  const [selectedGender, setselectedGender] = useState(null)
  const handleGenderClick = (gender)=>{
    console.log('Gender :',gender);
    setselectedGender(gender)
    localStorage.setItem('Gender', gender)
  }

  const [isNonBinaryOpen, setIsNonBinaryOpen] = useState()
  const [isMaleOpen, setIsMaleOpen] = useState()
  const [isFemaleOpen, setIsFemaleOpen] = useState()

  const NonBinaryToggler = () => {
    setIsFemaleOpen(false)
    setIsMaleOpen(false)
    setIsNonBinaryOpen((prev) => (!prev))
  }
  const MaleToggler = () => {
    setIsFemaleOpen(false)
    setIsNonBinaryOpen(false)
    setIsMaleOpen((prev) => (!prev))
  }
  const FemaleToggler = () => {
    setIsMaleOpen(false)
    setIsNonBinaryOpen(false)
    setIsFemaleOpen((prev) => (!prev))
  }

  const isActive = true
  const activeGradient = `bg-gradient-to-r from-[#fd4e86] to-[#d67bec] border-none text-white`
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `

  return (
    <>
    <ToastContainer/>
      <div className="progress w-full relative">
        <div className="line border-[1px] border-[#00000050] border-dashed w-full absolute top-[40%]"></div>
        <div className='flex justify-between relative'>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('name'))} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000070] bg-white border-2 rounded-[50%] flex items-center justify-center`}>1</button>
            <p className='text-[#00000070] text-xs font-medium'>Name</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('signingender'))} className={`w-14 h-14 text-xl ${isActive && activeGradient} ${isActive ? `text-white` : `text-[#00000050]`} border-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>2</button>
            <p className={` text-xs ${isActive && `text-[#D67AEA]`} font-medium`}>Gender</p>
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
      <div className='top-heading flex items-start flex-col gap-2'>
        <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[28px]'>Gender</h3>
        <h4 className=' text-[16px] text-[#00000060] font-medium capitalize'>only one chance to choose</h4>
      </div>
      <div className='flex justify-between py-10'>
        <div className='flex flex-col items-center gap-3'>
          <div className={`box w-32 h-32 rounded-3xl flex cursor-pointer items-center justify-center border-2 ${
              selectedGender === 'male' ? ' border-[2px] border-solid border-[#db74dc]  bg-[#fdf8fd]' : ' border-[2px] border-solid border-skyblue' 
            }`}
            onClick={()=>{
              handleGenderClick('male');
              MaleToggler()
            }}
            >
            <div>
              {isMaleOpen ? <img src='./images/male.svg' alt=''/>: <img src="./images/male1.png" alt="" />}
              </div>
          </div>
          <p>Male</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
        <div className={`box w-32 h-32 rounded-3xl flex cursor-pointer items-center justify-center border-2 ${
              selectedGender === 'female' ? ' border-[2px] border-solid border-[#db74dc]  bg-[#fdf8fd]' : ' border-[2px] border-solid border-skyblue'
            }`}
            onClick={()=>{
              handleGenderClick('female');
              FemaleToggler();
            }}
            >
          <div>
              {isFemaleOpen ? <img src='./images/femaleGradient.png' alt=''/>: <img src="./images/female.svg" alt="" />}
              </div>
          </div>
          <p>Female</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
        <div className={`box w-32 h-32 rounded-3xl flex cursor-pointer  items-center justify-center border-2 ${
              selectedGender === 'Non-Binary' ? ' border-[2px] border-solid border-[#db74dc]  bg-[#fdf8fd]' : ' border-[2px] border-solid border-skyblue' 
            }`}
            onClick={() => {
              handleGenderClick('Non-Binary'); 
              NonBinaryToggler(); 
            }}
            >
              <div>
              {isNonBinaryOpen ? <img src='./images/NonBinaryGradient.png' alt=''/>: <img src="./images/Nonbinary.svg" alt="" />}
              </div>
          </div>
          <p>Non-Binary</p>
        </div>
      </div>
      <button type="button" class={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`} onClick={() => {

        if(!selectedGender==""){
          pageChange('signinavatar')
        }
        else{
          toast.error('Please Select Gender')
        }
      }}>Submit</button>
    </>
  )
}

export default SignInGender 