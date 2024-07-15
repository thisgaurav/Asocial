import React, { useState } from 'react'
import { AllFriends, Blocked, MiniNavbar, NewRequest, Online, SentRequest, Sidebar} from '../components'

export default function Friends() {
  const [page, setPage] = useState(0)

  const pageHandler = (item) => {
    setPage(item)
  }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex flex-col gap-5 mt-5 px-10 box-border '>
        <h1 className='font-["Poppins"] text-3xl'>Friends</h1>
        <MiniNavbar pageHandler={pageHandler} page={page} />
        {page===0 && <Online/>}
        {page===1 && <AllFriends/>}
        {page===2 && <SentRequest/>}
        {page===3 && <NewRequest/>}
        {page===4 && <Blocked/>}
      </div>
    </div>
  )
}
