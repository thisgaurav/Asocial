import React, { useEffect, useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'

function ChatFeed({ chatFeed, chatDetails, username, submitHandler }) {
  const receiver = chatDetails.people[0]
  const [chatMsg, setChatMsg] = useState("")

  const handleChat = (e) => {
    e.preventDefault()
    if (chatMsg.length == 0) {
      return;
    }
    submitHandler(chatMsg)
    setChatMsg("")
  }

  return (
    <div className='flex flex-col gap-1.5'>
      <div className="header mx-10  flex bg-white h-20 justify-between border-b-2 items-center">
        <div className='flex gap-3 items-center'>
          <img src={receiver.person.avatar} className='rounded-full w-14 h-14' alt="" />
          <div className='font-["Poppins"]'>
            <h2 className=' font-semibold'>{receiver.person.username}</h2>
            {
              receiver.person.is_online ?
                (<div className='flex items-center gap-1'>
                  <div className='w-2 h-2 bg-green-700 rounded-full'></div>
                  <p>Online</p>
                </div>) :
                (<div className='flex items-center gap-1'>
                  <div className='w-2 h-2 bg-red-700 rounded-full'></div>
                  <p>Offline</p>
                </div>)
            }
          </div>
        </div>
        <div className='bg-[#00000030] h-8 w-8 flex items-center justify-center text-xl rounded-full p-2 text-black cursor-pointer'>
          <p>...</p>
        </div>
      </div>
        <div className='flex flex-col h-[72vh] overflow-auto no-scrollbar w-full px-8'>
      <ScrollableFeed className='no-scrollbar'>
          {
            chatFeed.map((item) => {
              const date = new Date(item.created).toLocaleString([], {
                hour: '2-digit',
                minute: '2-digit'
              })
              const msg = item.text.includes("<p>" || "</p>") ? item.text.slice(3, -4) : item.text
              return (
                (item.text &&
                  <div key={item.id} className={`flex ${username === item.sender.username ? ' flex-row-reverse justify-start' : 'justify-start'} items-center gap-5 font-["Poppins"] px-4 py-2`}>
                    <img src={item.sender.avatar} className='w-12 h-12 rounded-full' alt="" />
                    <div className={`flex max-w-96 flex-col gap-3 ${username === item.sender.username ? ' items-end' : "items-start"}`}>
                      <p className={`${username === item.sender.username ? 'bg-[#D67AEA] text-white rounded-t-3xl rounded-s-3xl' : 'bg-[#f1f1f1] rounded-t-3xl rounded-e-3xl'} drop-shadow-lg shadow-2xl px-4 py-3`}>{msg}</p>
                      <p className=' text-xs'>{date}</p>
                    </div>
                  </div>
                )
              )
            })
          }
      </ScrollableFeed>
        </div>
      <form onSubmit={handleChat}>
        <div className=' h-14 flex mx-8 border-t-2 border-[#ececec] py-1 justify-between items-center px-2 pt-3'>
          <input type="text" value={chatMsg} onChange={(e) => setChatMsg(e.target.value)} placeholder='Type a Message' className='w-[70%] focus:outline-none relative bottom-0' />
          <div className='flex items-center gap-5'>
            <div>
              <img className=' scale-90 cursor-pointer' src="./images/smile.png" alt="" />
            </div>
            <div>
              <img className=' scale-90 cursor-pointer' src="./images/attach.png" alt="" />
            </div>
            <div>
              <img className=' scale-90 cursor-pointer' src="./images/mic.png" alt="" />
            </div>
            <button type='submit' className='bg-[#D67AEA] flex items-center justify-center p-3 rounded-full scale-90'><img src="./images/send.png" alt="" /></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatFeed