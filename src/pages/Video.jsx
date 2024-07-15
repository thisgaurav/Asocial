import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { Sidebar } from '../components'
import AgoraUIKit from 'agora-react-uikit'


function Video() {
  const btn = `text-center rounded-[40px] font-['Poppins'] text-lg px-5 py-5`
  const [isOpen, setIsOpen] = useState(false)
  const [isFriendOpen, setIsFriendOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)
  const [videoCall, setVideoCall] = useState(false)
  const rtcProps = {
    appId: '637d6e41c10e4fa78a3c0deaa6f0ef51',
    channel: 'test',
    token: null, // enter your channel token as a string 
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleFriend = () => {
    setIsFriendOpen((prev) => !prev)
  }

  return (
    <div className='flex relative '>
      {!isOpen && <Sidebar isFriendOpen={isFriendOpen} isChatOpen={isChatOpen} isHistoryOpen={isHistoryOpen} />}
      { !isOpen ? 
        <Webcam mirrored={true} className='w-[100vw] h-[100vh] object-cover'/> : 
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}/>
      </div>   
      }
      
      <button onClick={toggleOpen} className={`text-white flex gap-5 items-center justify-center px-24 bg-gradient-to-r from-[#fd4e86] absolute bottom-[50px] left-[50%] active:scale-90 transition-all ease-in-out delay-125 ${isOpen && '-translate-x-[50%]'} to-[#d67bec] ${btn}`}> <img src="./images/webcam.png" alt="" /> {isOpen ? 'Stop Video Chat' : 'Start Video Chat'}</button>
    </div>
  )
}

export default Video