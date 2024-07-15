import React, { useEffect, useState } from 'react'

function ChatList({ chats, chatIdHandler, chatId }) {

  return (
    <div className='flex gap-3 flex-col py-4 font-["Poppins"]'>
      <h1 className='text-2xl px-6 text-[#D67AEA]'>All messages</h1>
      <div className='flex mx-6 py-2 gap-5 border-b-2'>
        <img src="./images/search.png" alt="haha" />
        <input type="search" className='outline-none w-full' id="chatSearch" />
      </div>
      {chats.map((item) => {
        const date = new Date(item.last_message.created).toLocaleString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
        return (
          <div key={item.id} onClick={() => { chatIdHandler(item.id) }} className={`flex ${chatId === item.id ? "bg-[#f4f4f4]" : "bg-[#fff]"} gap-3 p-3 items-center cursor-pointer hover:bg-[#00000005]`}>
            <div className='w-16'>
              <img src={item.admin.avatar} className='rounded-full h-14 object-cover object-center' alt="" />
            </div>
            <div>
              <div className='flex w-64 justify-between py-2'>
                <p className=' capitalize '>{item.title}</p>
                <p>{date}</p>
              </div>
              <p className=' text-[#00000080] text-sm'>{item.last_message.text}</p>
            </div>
          </div>
        )
        // 
      })}
    </div>
  )
}

export default ChatList