import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[597px] shadow-2xl rounded-[60px] bg-white p-14 flex flex-col gap-8 font-["Poppins"]'>
      {props.children}
    </div>
  )
}

export default Card