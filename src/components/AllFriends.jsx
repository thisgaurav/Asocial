import React from 'react'
import data from './utils/data.json'
import { FiMoreHorizontal } from "react-icons/fi";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function AllFriends() {
  const result = data.filter((item) => (item.characterImageFull))

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl'>All Friends ({data.length})</h1>
      <div className='grid grid-cols-4 gap-5 bg-white shadow-2xl rounded-xl px-10 py-5  w-[1450px] overflow-auto no-scrollbar max-h-[720px] font-["Poppins"]'>
        {
          result.map((item, index) => (
            <div key={index} className='rounded-lg bg-white flex items-center justify-between drop-shadow-2xl px-4 py-2 '>
              <div className='flex items-center gap-5 font-medium'>
                <div className='bg-white rounded-full overflow-hidden'>
                  <img className='w-20 drop-shadow-2xl h-20 object-center' src={item.characterImageFull} alt="" />
                </div>
                <h2>{item.characterName}</h2>
              </div>
              <div className="font-['Poppins']">
                <Menu placement='bottom-end'>
                  <MenuHandler>
                    <Button className='bg-[#00000030] rounded-full p-2 text-black cursor-pointer w-8 h-8 flex items-center justify-center text-xl'><FiMoreHorizontal/></Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>UnFriend</MenuItem>
                    <MenuItem>Report</MenuItem>
                    <MenuItem className='text-red-500'>Block</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllFriends
