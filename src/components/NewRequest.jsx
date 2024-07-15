import React from 'react'
import data from './utils/data.json'
import { FiMoreHorizontal } from "react-icons/fi";

export default function NewRequest() {
  const result = data.filter((item) => (item.characterImageFull))
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>New Requests ({data.length})</h1>
      <div className='grid grid-cols-4 gap-5 bg-white shadow-2xl rounded-xl px-10 py-5  w-[1450px] overflow-auto no-scrollbar  max-h-[720px] font-["Poppins"]'>
        {
          result.map((item, index) => (
            <div key={index} className='rounded-lg bg-white drop-shadow-2xl flex flex-col items-center gap-2 py-2'>
              <div className='flex items-center justify-between px-4 py-2 w-full'>
                <div className='flex items-center gap-2 font-medium'>
                  <div className='bg-white rounded-full overflow-hidden'>
                    <img className='w-20 drop-shadow-2xl h-20 object-center' src={item.characterImageFull} alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <h2 className='text-lg'>{item.characterName}</h2>
                    <p className=' text-[#00000060] text-sm'>Sent you friend Request</p>
                  </div>
                </div>
                <div className='bg-[#00000030] rounded-full p-2 cursor-pointer'>
                  <FiMoreHorizontal />
                </div>
              </div>
              <div className='flex gap-3 pb-2 text-sm'>
                <button className='bg-[#00000030] px-4 py-2 rounded-full'>Cancel</button>
                <button className='bg-gradient-to-r from-[#fd4e86] to-[#d67bec] text-white px-4 py-2 rounded-full'>Confirm</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
