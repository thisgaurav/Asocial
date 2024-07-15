import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ChatList from './ChatList'
import ChatFeed from './ChatFeed'
import { fetchData, postData } from './utils/fetchAPI'

function Messages() {
  const projectID = '26795833-9e5f-4e86-9481-452c7e877617'
  const userName = 'Gaurav'
  const userSecret = '1234'
  const chatID = '243320'
  const accessKey = 'ca-16bd08f3-b2df-4b51-bd3c-5f888c5c3ca7'

//   let socket = new WebSocket(
//     `wss://api.chatengine.io/person/?publicKey={${projectID}}&username={${userName}}&secret={${userSecret}}`
// );

// socket.onopen = (event) => console.log("hello open",event);
// socket.onclose = (event) => console.log("hello close",event);
// socket.onerror = (error) => console.log(error);

  const [chats, setChats] = useState(null)
  const [chatId, setChatId] = useState(257431)
  const [chatFeed, setChatFeed] = useState(null)
  const [chatDetails, setChatDetails] = useState(null)
  const [activeChat, setActiveChat] = useState(null)

  const fetchingData = () => {
    fetchData('https://api.chatengine.io/chats/').then((res) => {
      // console.log(res);
      setChats(res)
    })
    fetchData(`https://api.chatengine.io/chats/${chatId}/messages/`).then((res) => {
      setChatFeed(res)
    })
    fetchData(`https://api.chatengine.io/chats/${chatId}/`).then((res) => {
      setChatDetails(res)
    })
  }
  // socket.onmessage = () => {fetchingData()}

  useEffect(() => {
    fetchingData()
  }, [chatId])

  const chatIdHandler = (chatID) => {
    console.log("hello");
    setChatId(chatID)
  }

  const submitHandler = (chatMsg) => {
    // console.log("bello");
    postData(`https://api.chatengine.io/chats/${chatId}/messages/`, chatMsg)
    fetchData(`https://api.chatengine.io/chats/${chatId}/messages/`).then((res) => {
      console.log("hello");
      setChatFeed(res)
    })
    setTimeout(() => {
      fetchingData()
    }, 50);
  }

  if (!chats || !chatFeed || !chatDetails) {
    return "Loading"
  }

  return (
    <div className='flex'>
      <Sidebar />
      <div className=' w-[100%] max-h-[80vh] min-h-[80vh] font-["Poppins"] flex flex-col gap-5 p-8 '>
        <h1 className='text-3xl'>Messages</h1>
        <div className='flex gap-5 min-h-[89vh]'>
          <div className='w-1/4 shadow-2xl rounded-3xl'>
            <ChatList chats={chats} activeChat={activeChat} chatId={chatId} chatIdHandler={chatIdHandler} />
          </div>
          <div className='w-3/4 shadow-2xl rounded-3xl overflow-auto'>
            <ChatFeed chatFeed={chatFeed} chatDetails={chatDetails} submitHandler={submitHandler} username={"Gaurav"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages