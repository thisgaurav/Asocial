import React, { useState } from 'react'
import data from './utils/data.json'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

function Profile() {
  const [open, setOpen] = useState(true);
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5`
  const handleOpen = () => {setOpen((cur) => !cur);console.log("hello")};
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex'>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-[600px] rounded-[40px] p-5">
          <CardBody className="font-['Poppins'] flex flex-col relative">
            <div className='flex items-center justify-between mb-4'>
              <h1 className=' text-[#403c3e] font-medium text-[26px]'>My Account</h1>
              <img onClick={handleOpen} src="./images/close-btn.svg" className='absolute right-3 cursor-pointer' alt="" />
            </div>
            <div className='flex items-center flex-col justify-center'>
              <img className=' border-2 border-[#d67aea] w-36 h-36 bg-white rounded-full p-2 ' src={data[196].characterImageFull} alt="" />
              <a className=' text-[#d67aea] underline'>Change Image</a>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
              <label htmlFor="name" className='font-medium'>Name</label>
              <div className='flex gap-3 items-center w-full'>
                <input type="text" defaultValue={'Margaery Tyrell'} className='w-full focus-within:outline-none border-b-2' id='name' />
              </div>
              <div className='flex gap-8 py-3 items-center w-full'>
                <label htmlFor="gender" className=' font-medium'>Gender</label>
                <div className='flex flex-col items-center justify-center'>
                  <img src="./images/male.png" alt="" />
                  <p>Male</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src="./images/female.png" alt="" />
                  <p>Female</p>
                </div>
                <div className='flex flex-col  items-center justify-center'>
                  <img src="./images/nonbinary.png" alt="" />
                  <p>Non Binary</p>
                </div>
              </div>
              <div className='flex gap-3 items-center w-full'>
                <label htmlFor="name" className='font-medium'>Age</label>
                <input type="date" className='focus-within:outline-none w-full border-b-2' id='name' />
              </div>
              <h1 className=' text-[#403c3e] font-medium text-[26px]'>Interest</h1>
              <h2 className='text-lg font-medium'>Creative</h2>
              <div className='flex gap-4'>
                <div className='flex justify-between gap-3 bg-gradient-to-r from-[#FC4F88] to-[#D67AEA] text-white px-4 py-2 rounded-full'>
                  <p>Art</p>
                  <p>X</p>
                </div>
                <div className='flex justify-between gap-3 bg-gradient-to-r from-[#FC4F88] to-[#D67AEA] text-white px-4 py-2 rounded-full'>
                  <p>Gaming</p>
                  <p>X</p>
                </div>
                <div className='flex justify-between gap-3 bg-gradient-to-r from-[#FC4F88] to-[#D67AEA] text-white px-4 py-2 rounded-full'>
                  <p>Exploring</p>
                  <p>X</p>
                </div>
              </div>
              <button className=' w-full text-2xl rounded-3xl  border-[#D67AEA] border-2 text-[#D67AEA] h-16 '>Enter Your Own</button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" onClick={handleOpen} className={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Done</Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}

export default Profile