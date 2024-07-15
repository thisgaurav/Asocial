import React, { useState } from 'react'

function MiniNavbar({pageHandler, page}) {

  const activeDiv = `bg-gradient-to-r from-[#fd4e86] to-[#d67bec] text-white`

  return (
    <div className='bg-[#00000020] rounded-xl font-["Poppins"] flex w-fit'>
      <h2 onClick={() => {pageHandler(0)}} className={`cursor-pointer px-16 font-medium rounded-xl py-6 ${page===0 && activeDiv}`}>Online</h2>
      <h2 onClick={() => {pageHandler(1)}} className={`cursor-pointer px-16 font-medium rounded-xl py-6 ${page===1 && activeDiv}`}>All Friends</h2>
      <h2 onClick={() => {pageHandler(2)}} className={`cursor-pointer px-16 font-medium rounded-xl py-6 ${page===2 && activeDiv}`}>Sent Request</h2>
      <h2 onClick={() => {pageHandler(3)}} className={`cursor-pointer px-16 font-medium rounded-xl py-6 ${page===3 && activeDiv}`}>New Request</h2>
      <h2 onClick={() => {pageHandler(4)}} className={`cursor-pointer px-16 font-medium rounded-xl py-6 ${page===4 && activeDiv}`}>Blocked</h2>
    </div>
  )
}

export default MiniNavbar