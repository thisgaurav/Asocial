import { Friends, Home, Login, Video } from "./pages"
import { Route, Routes } from "react-router-dom"
import { useState } from "react"
// import { TabContextProvider } from "./contexts"
import Messages from "./components/Messages"
import ChatHistory from "./components/ChatHistory"
import { Interests } from "./components"


function App() {


  return (
      <div className='max-w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<Video />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/history" element={<ChatHistory />} />
          <Route path="/interest" element={<Interests/>} />
        </Routes>
      </div>
  )
}

export default App