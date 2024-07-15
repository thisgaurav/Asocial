import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const VerificationCode = ({ pageChange }) => {
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef(Array(6).fill(null)); 

  const handleChange = (index, event) => {
    const newOtp = [...otp]; 
    newOtp[index] = event.target.value;
    setOtp(newOtp);

    
    if (event.target.value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (event.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  async function handleVerification(e) {
    e.preventDefault();

    const gettingdata = localStorage.getItem('mobileData');
    const mydata = JSON.parse(gettingdata);
    console.log(mydata)

    const token = mydata?.token; 
    console.log(token)

    const myNumber = mydata?.userdata?.mobile_no;    
    console.log(myNumber)

    const finalotp = otp.join('');  

    const data = {
      mobile_no: myNumber,
      otp: finalotp,
    };

    try {
      const verificationResponse = await axios.post(
        "http://deploywork.com:2012/api/v1/auth/otp-verfication",
        data
      );
      
      if (verificationResponse.data.success) {
        pageChange('name');
      } else {
        toast(verificationResponse.data.message);
      }
    } catch (error) {
      toast.error("Verification error:", error);
    }
  }

  return (
    <>
      <div className='flex flex-col items-start gap-4'>
      <ToastContainer />
        <h2 className='text-[30px] font-bold'>Verification Code</h2>
        <p className='text-black opacity-40 font-medium'>
          Please enter verification code sent to Mobile number.
        </p>
      </div>
      <div className='flex justify-center'>
        <img src="./images/verify.svg" alt="" />
      </div>
      <div className='flex gap-2'>
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            maxLength={1}
            inputMode="numeric"
            className='w-[70px] rounded-xl text-center aspect-square border-[1px] border-[#00000070]'
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to each input
          />
        ))}
      </div>
      <div className='flex justify-between w-full px-8'>
        <p className='text-[#A8A8A8]'>Didn't received code?</p>
        <a href="#" className='text-[#D67AEA] underline'>Resend Code</a>
      </div>
      <button type="button" className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`} onClick={handleVerification}>Submit</button>
      </>)}
      export default VerificationCode;