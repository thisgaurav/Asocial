import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { RiSettings5Line } from "react-icons/ri";
import Terms from './Terms';
import Privacy from './Privacy';
import Profile from './Profile';

function Sidebar() {

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isSocialOpen, setIsSocialOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [IsAccountOpen, setIsAccountOpen] = useState(false)
  const nav = useNavigate()

  const SocialToggler = ({ handleOpen }) => {
    setIsSettingsOpen(false)
    setIsProfileOpen(false)
    setIsSocialOpen((prev) => (!prev))
  }

  const ProfileToggler = () => {
    setIsSettingsOpen(false)
    setIsSocialOpen(false)
    setIsProfileOpen((prev) => (!prev))
  }
  const SettingsToggler = () => {
    setIsProfileOpen(false)
    setIsSocialOpen(false)
    setIsSettingsOpen((prev) => (!prev))
  }

  const ModalToggler = () => {
    setIsModalOpen((prev) => (!prev))
  }

  const termsToggler = () => {
    setIsTermsOpen((prev) => !prev)
  }

  const accountToggler = () => {
    setIsAccountOpen(prev => !prev)
  }
  console.log(IsAccountOpen);

  return (
    <div className='h-screen relative bg-gradient-to-b from-[#fd4e86] to-[#d67bec] min-w-96 flex flex-col gap-10 font-["Poppins"] py-10'>
      <h2 className=' font-["Boughies"] text-[36px] ps-14 text-white lg:text-[50px] filter-none'>Asocial</h2>
      <div className='w-full flex flex-col gap-3 items-center'>
        <div className='bg-white flex py-4 px-4 w-3/4 rounded-xl cursor-pointer items-center justify-between'>
          <div>
            <img src="./images/videocam.png" alt="" />
          </div>
          <div className='text-[#D67AEA] flex justify-between w-3/4 items-center font-medium text-lg'>
            Video Chat
            <img src="./images/right-arrow.png" alt="" />
          </div>
        </div>
        <div onClick={SocialToggler} className={` ${isSocialOpen ? 'bg-white text-[#d67aea]' : 'bg-transparent text-white'}  flex py-4 px-4 w-3/4 rounded-xl cursor-pointer transition-all ease-in-out items-center justify-between`}>
          <div>
            {isSocialOpen ? <img src="./images/second-logo.png" alt="" /> : <img src="./images/logo.png" alt="" />}
          </div>
          <div className=' flex justify-between w-3/4 items-center font-medium text-lg'>
            My Asocial
            {isSocialOpen ? <img src="./images/uparrow.png" alt="" /> : <img src="./images/down-arrow.png" alt="" />}
          </div>
        </div>
        {isSocialOpen &&
          <div className={`flex flex-col ps-4 bg-transparent gap-3 text-[#ffffff95]`}>
            <Link to={'/Friends'}>Friends</Link>
            <Link to={'/messages'}>Messages</Link>
            <Link to={'/history'}>Video Chat History</Link>
          </div>
        }
        <div onClick={ProfileToggler} className={` ${isProfileOpen ? 'bg-white text-[#d67aea]' : 'bg-transparent text-white'}  flex py-4 px-4 w-3/4 rounded-xl cursor-pointer transition-all ease-in-out items-center justify-between`}>
          <div>
            {isProfileOpen ? <IoPersonOutline className='text-2xl' /> : <img src="./images/profile.png" alt="" />}
          </div>
          <div className='flex justify-between w-3/4 items-center font-medium text-lg'>
            Profile
            {isProfileOpen ? <img src="./images/uparrow.png" alt="" /> : <img src="./images/down-arrow.png" alt="" />}
          </div>
        </div>
        {isProfileOpen &&
          <div className='cursor-pointer text-[#ffffff95] pe-8' onClick={() => { accountToggler() }}>
            {IsAccountOpen && <Profile />}My Account</div>
        }

        <div onClick={SettingsToggler} className={` ${isSettingsOpen ? 'bg-white text-[#d67aea]' : 'bg-transparent text-white'}  flex py-4 px-4 w-3/4 rounded-xl cursor-pointer transition-all ease-in-out items-center justify-between`}>
          <div>
            {isSettingsOpen ? <RiSettings5Line className='text-2xl' /> : <img src="./images/setting.png" alt="" />}
          </div>
          <div className='flex justify-between w-3/4 items-center font-medium text-lg'>
            Settings
            {isSettingsOpen ? <img src="./images/uparrow.png" alt="" /> : <img src="./images/down-arrow.png" alt="" />}
          </div>
        </div>
        {
          isSettingsOpen &&
          <div className={`flex flex-col ps-24 bg-transparent gap-3 text-[#ffffff95]`}>
            <p className='cursor-pointer' onClick={() => { ModalToggler() }}>{isModalOpen && <Privacy />}Privacy Policy</p>
            <p className=' cursor-pointer' onClick={() => { termsToggler() }}>{isTermsOpen && <Terms />}Terms & Conditions</p>
            <p className='flex items-center cursor-pointer'>Interest Matching
              <label className="relative scale-[60%] inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div className="group border-white text-black border-2 peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['off']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1  after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-hover:after:scale-95 peer-checked:after:rotate-0">
                </div>
              </label>
            </p>
          </div>
        }
      </div>
      <div onClick={() => (nav('/'))} className='border-[2px] absolute bottom-16 border-l-0 text-white py-4 w-[200px] mt-80 cursor-pointer items-center rounded-r-[50px] border-white flex justify-center gap-5'>
        <img src="./images/logout.png" alt="" />
        <p className='font-medium'>Logout</p>
      </div>
    </div>
  )
}

export default Sidebar