import React from 'react'
import { useNavigate } from 'react-router-dom'

const Created = () => {
  const btn = `text-center rounded-3xl font-['Poppins'] text-lg px-5 py-5 `
  const nav = useNavigate()

  return (
    <>
      <div className='flex justify-center'>
        <img src="./images/account_created.svg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className=' text-[30px] font-bold'>Avatar</h2>
        <p className='text-black opacity-40 font-medium text-center'>Dear user your account has been created successfully continue to start using App.</p>
      </div>
      <button type="button" onClick={() => (nav('/video'))} class={`text-white bg-gradient-to-r from-[#fd4e86] to-[#d67bec] w-full ${btn}`}>Get Started</button>
    </>
  )
}

export default Created