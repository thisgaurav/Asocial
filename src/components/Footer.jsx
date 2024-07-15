import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url(./images/footer_bg.png)] relative '>
      <div className='text-center text-white flex flex-col items-center py-[100px] gap-12'>
        <img src="./images/footer-logo.svg" alt="" />
        <div className=' '>
          {["Home", "About us", "Privacy Policy", "Contact Us", "Help"].map((item, index) => (
            <a href="#" className={`px-6 font-["Poppins"] py-3 lg:py-1 text-md ${index == 4 && 'border-none'} flex flex-col lg:inline border-0 lg:border-r-[1px]`} key={index}>{item}</a>
          ))}
        </div>
        <div className='grid grid-cols-2 md:flex gap-9'>
          <img className='scale-90' src="./images/facebook.svg" alt="" />
          <img className='scale-90' src="./images/instagram.svg" alt="" />
          <img className='scale-90' src="./images/linkedin.svg" alt="" />
          <img className='scale-90' src="./images/twitter.svg" alt="" />
        </div>
      </div>
      <div className="copyright bg-[#ffffff60] text-center text-white text-[18px] font-normal py-5 tracking-wider font-['Poppins'] absolute bottom-0 w-full">
        <h2>Copyright @ 2023 Asocial</h2>
      </div>
    </div>
  )
}

export default Footer