import { useAccordion } from '@material-tailwind/react';
import Card from '../Card'
import React, { useState } from 'react'
import axios from 'axios';

const Welcome = ({ pageChange }) => {

  const[phoneNo,setPhoneNo]= useState("")
  
  const handleChange= (e) => {
    setPhoneNo(e.target.value)
  }
  
  const btn = `text-center rounded-2xl font-['Poppins'] text-lg px-5 py-5 `

  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      account_type: "1",
      mobile_no: phoneNo
    }
    const response = await axios.post("http://deploywork.com:2012/api/v1/auth/sign-up", data);
    console.log(response);
    const settingData= JSON.stringify(response.data.body)
    localStorage.setItem('mobileData',settingData)
    ((pageChange('verification')))
    
  }

  return (
    <>
      <div className='flex flex-col items-start gap-4'>
        <h2 className='font-["Boughies"] text-[36 px] lg:text-[50px]'>Welcome</h2>
        <p className='text-black opacity-40 font-["Poppins"] font-medium'>A new and exciting way to meet people</p>
      </div>
      <form className='form-wala-part flex flex-col gap-5 font-["Poppins"]' onSubmit={handleLogin}>
        <div className='border-[1px] border-[#a8a8a8] flex justify-between p-[17px] rounded-[20px] gap-5'>
          <img src="./images/phone.svg" className='border-r-2 border-[#DEDEDE] pr-4' alt="" />
          <input type="text" className='border-0 w-full h-full text-xl outline-none' maxLength={10} minLength={10} required onChange={handleChange} value={phoneNo}/>
        </div>
        <div className='flex gap-2 text-lg text-[#A8A8A8]'>
          <input type="checkbox" />
          <p>Agree to our <span className='text-[#D67AEA]'>Terms</span> and <span className='text-[#D67AEA]'>Data policy</span></p>
        </div>
        <button type="submit" className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] ${btn}`} >Get Verification Code</button>
      </form>
      <div className='flex flex-col items-center gap-5'>
        <div className='relative mb-8'>
          <img src="./images/line.svg" alt="" />
          <p className='text-[#A8A8A8] absolute -top-2.5 left-[40%] font-["Poppins"]'>Login With</p>
        </div>
        <div className='flex gap-10'>
          <img src="./images/fblogin.svg" alt="" />
          <img src="./images/google.svg" alt="" />
        </div>
      </div>
      <button type="button" className={`text-[#D67AEA] border-[1px] border-[#D67AEA] hover:text-white transition-all ease-in-out delay-75 hover:bg-gradient-to-r from-[#fd4e86] to-[#d67bec] ${btn}`}>Skip Signup</button>

    </>
  )
}

export default Welcome