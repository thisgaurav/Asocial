import React, { useState } from 'react'
import { avatar } from '../utils/storage'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const SignInAvatar = ({ pageChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const isActive = true
  const activeGradient = `bg-gradient-to-r from-[#fd4e86] to-[#d67bec] border-none text-white`
  const avtarGradient = ' border-[2px] border-solid border-[#db74dc]  bg-[#fdf8fd]'
  const inactiveGradient = `bg-[#f8f8f8]`;
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (index) => {
    console.log('Selected avatar:', index);
    setSelectedAvatar(index);
    if (index === 0) {
      setOpen(true);
    }
    localStorage.setItem('Avatar',index)
  };

  return (
    <>
    <ToastContainer/>
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
            <button onClick={()=>(pageChange('signinavatar'))} className={`w-14 h-14 text-xl ${isActive && activeGradient} ${isActive ? `text-white` : `text-[#00000050]`} border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>3</button>
            <p className={` text-xs ${isActive && `text-[#D67AEA]`} font-medium`}>Avatar</p>
          </div>
          <div className='progress-text flex justify-between flex-col items-center gap-1'>
            <button onClick={()=>(pageChange('interest'))} className={`w-14 h-14 text-xl border-[#00000050] text-[#00000050] bg-white border-2 rounded-[50%] flex items-center justify-center`}>4</button>
            <p className='text-[#00000070] text-xs font-medium'>Interests</p>
          </div>
        </div>
      </div>
      <div className='top-heading flex items-start flex-col gap-2'>
        <h3 className='text-[22px] font-bold  md:text-[24px] lg:text-[26px] xl:text-[28px]'>Avatar</h3>
        <h4 className=' text-[16px] text-[#00000060] font-medium capitalize'>select the avatar you like</h4>
      </div>
      <div className='avatar-div no-scrollbar max-h-[464px] overflow-y-scroll overflow-x-hidden'>
        <div className='grid grid-cols-1 place-content-center content-center sm:grid-cols-2 gap-4 lg:grid-cols-3'>
          {avatar.map((item, index) =>
          (
            <div className={`avatar-inner w-[152px] h-[132px] flex items-center justify-center cursor-pointer bg-[#f8f8f8] rounded-2xl ${selectedAvatar === index ? avtarGradient : inactiveGradient
            }`} key={index}
            onClick={() => handleAvatarClick(index)}
            >
              <img src={item.src} className='scale-[50%]' alt="" />
            </div>
          )
          )}
        </div>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full rounded-3xl p-4">
          <CardBody className="flex flex-col gap-4">
            <div className='flex items-center justify-between mb-4'>
              <h1 className=' text-[#403c3e] text-medium text-[26px]'>Set Profile Picture</h1>
              <img onClick={handleOpen} src="./images/close-btn.svg" className=' cursor-pointer' alt="" />
            </div>
            <div className='flex items-center justify-between px-8 mb-6'>
              <div>
                <img src="./images/camera.png"  className='h-32 p-4 rounded-xl cursor-pointer bg-[#f8f8f8]' alt="" />
              </div>
              <div>
                <img src="./images/gallery.png"  className='h-32 p-4 rounded-xl cursor-pointer bg-[#f8f8f8]' alt="" />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="button" variant="gradient" onClick={handleOpen} className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Done</Button>
          </CardFooter>
        </Card>
      </Dialog>

      <button type="button" class={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`} onClick={() => {
        if(!selectedAvatar==""){
          pageChange('interest')
        }
        else{
          toast.error('Please Select Avatar')
        }}}>Submit</button>
    </>
  )
}

export default SignInAvatar