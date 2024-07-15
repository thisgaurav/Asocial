import React, { useState } from 'react'
import { Card, Created,Interests, ScreenName, SignInAvatar, SignInGender, Trials, VerificationCode, Welcome, WhiteNavbar } from '../components'

const Login = () => {
  const [page, setPage] = useState('welcome')

  const pageHandler = (item) => {
    setPage(item)
  }

  return (
    <>
      <WhiteNavbar />
      <div className='bg-[url("./images/welcome_bg.jpg")] bg-cover min-h-screen w-full flex justify-center items-center'>
        <Card>
          {page === 'welcome' && <Welcome pageChange={pageHandler} />}
          {page === 'verification' && <VerificationCode pageChange={pageHandler} />}
          {page === 'name' && <ScreenName pageChange={pageHandler} />}
          {page === 'signingender' && <SignInGender pageChange={pageHandler} />}
          {page === 'signinavatar' && <SignInAvatar pageChange={pageHandler} />}
          {page === 'interest' && <Interests pageChange={pageHandler} />}
          {page === 'created' && <Created />}
          {page === 'signintrial' && <Trials />}
        </Card>
      </div>
    </>
  )
}

export default Login