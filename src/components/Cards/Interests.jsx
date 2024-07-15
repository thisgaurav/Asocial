import React, { useState } from 'react'
import { interest } from '../utils/storage'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  
} from "@material-tailwind/react";
import axios from 'axios';

const Interests = ({pageChange}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [selectedInterest, setSelectedInterest] = useState("")
  
  async function handleSaveInterests (e) {
    const currentInterests = selectedInterest;
    if (currentInterests) {
      localStorage.setItem('Interest', JSON.stringify(currentInterests));
    }
    
      const nameData = localStorage.getItem('name');
      const genderData = localStorage.getItem('Gender');
      const dobData = localStorage.getItem('dob');
      const avatarData = localStorage.getItem('Avatar');
      const interestData = localStorage.getItem('Interest');
      const phoneData = localStorage.getItem('mobileData');
      const myPhoneData = JSON.parse(phoneData);
      const myNumber = myPhoneData?.userdata?.mobile_no
   
      console.log("Name:",nameData)
      console.log("Gender:",genderData)
      console.log("DOB:",dobData)
      console.log("Avatar:",avatarData)
      console.log("Interest:",interestData)
      console.log("Number:",myNumber)

      const data={
        name:nameData,
        gender:genderData,
        avatar:avatarData,
        dob:dobData,
        interest:interestData,
        mobile_no:myNumber,
        is_otp_verify:1
      }
      const response = await axios.post("http://deploywork.com:2012/api/v1/auth/complete-profile",data)
      console.log(response);
      pageChange('created');
  };


  const isActive = true
  const activeGradient = `bg-gradient-to-r from-[#fd4e86] to-[#d67bec] border-none text-white`
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `


  return (
    <>
      <div className="progress w-full relative">
        <div className="line border-[1px] border-[#00000050] border-dashed w-full absolute top-[40%]"></div>
        <div className='flex justify-between relative'>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('name'))} className={`w-14 h-14 text-xl border-[#00000050] bg-white text-[#00000050] border-2 rounded-[50%] flex items-center justify-center`}>1</button>
            <p className='text-[#00000070] text-xs font-medium'>Name</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('signingender'))} className={`w-14 h-14 text-xl border-[#00000050] bg-white text-[#00000050] border-2 rounded-[50%] flex items-center justify-center`}>2</button>
            <p className='text-[#00000070] text-xs font-medium'>Gender</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange)('signinavatar')} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>3</button>
            <p className='text-[#00000070] text-xs font-medium'>Avatar</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('interest'))} className={`w-14 h-14 text-xl ${isActive && activeGradient} ${isActive ? `text-white` : `text-[#00000050]`} border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>4</button>
            <p className={` text-xs ${isActive && `text-[#D67AEA]`} font-medium`}>Interest</p>
          </div>
        </div>
      </div>
      <div className='top-heading flex items-start flex-col gap-2'>
        <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[28px]'>Your Interests</h3>
        <h4 className=' text-[16px] text-[#00000060] font-medium capitalize'>Pick up to 5 things you love</h4>
      </div>
      <div className='avatar-div no-scrollbar max-h-[464px] overflow-y-scroll overflow-x-hidden'>
        
          {interest.map((item, index) => 
            (
              <div key={index} className={`flex flex-col gap-4 ${index == 0 ? 'pt-2 pb-12' : 'py-12'} border-b-8 border-b-[#bcbcbc1a]`}>
                <p className='text-[20px] text-[#403c3e]'>{item.title}</p>
                <div className='flex gap-4 '>
                  {item.body.map((item, index) => (
                    <button key={index} 
                    onClick={() => {
                      setSelectedInterest(item)
                      const currentInterests = [...selectedInterest]; 
                      const alreadySelected = currentInterests.find((interest) => interest === item);
    
                      if (alreadySelected) {
                        const newInterests = currentInterests.filter((interest) => interest !== item);
                        setSelectedInterest(newInterests);
                      } else {
                        currentInterests.push(item);
                        setSelectedInterest(currentInterests);
                      }
    
                    }} 
                    className={`bg-gradient-to-r from-[#fd4e86] to-[#d67bec] px-8 py-1 text-center text-white rounded-xl ${selectedInterest.includes(item) ? ' border-[2px] border-solid border-[#db74dc]  bg-[#fdf8fd]' : ' border-[2px] border-solid border-skyblue'}`}>{item}</button>
                  ))}
                </div>
              </div>
            )
          )}
        
      </div>
      <div className='relative flex justify-center'> 
        <img src="./images/line.svg" alt="" />
        <p className='text-[#A8A8A8] absolute -top-2.5 font-["Poppins"]'>OR</p>
      </div>      
      <button type="button" class={`text-[#D67AEA] border-[1px] border-[#D67AEA] hover:text-white transition-all ease-in-out delay-75 hover:bg-gradient-to-r from-[#fd4e86] to-[#d67bec] ${btn}`} onClick={handleOpen}>Enter Your Own</button>
      {/* <Button </Button> */}
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full rounded-3xl p-4">
          <CardBody className="flex flex-col gap-4">
            <div className='flex items-center justify-between mb-4'>
              <h1 className=' text-[#403c3e] text-medium text-[26px]'>Enter Your Own</h1>
              <img onClick={handleOpen} src="./images/close-btn.svg" className=' cursor-pointer' alt="" />
            </div>
            {/* <Input label="Type your interest words here"  size="lg" /> */}
            <div className='border-[1px] border-[#a8a8a8] flex justify-between p-[17px] rounded-[20px] gap-5'>
          <input type="text" className='border-0 w-full h-full  text-xl outline-none' placeholder='Type your Interest words here'/>
        </div>
          </CardBody>
          <CardFooter className="pt-0">
            {/* <Button  fullWidth>
              Done
            </Button> */}
            <Button type="button" variant="gradient" onClick={handleOpen} className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Done</Button>
          </CardFooter>
        </Card>
      </Dialog>
      <button type="button" className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`} onClick={() => { handleSaveInterests(); }}>Submit</button>
    </>
  )
}

export default Interests