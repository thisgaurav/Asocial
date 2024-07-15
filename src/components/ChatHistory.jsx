import React, { useEffect } from 'react';
import { Sidebar } from '.';
import data from './utils/data.json';
import axios from 'axios';

function ChatHistory() {
  const result = data.filter((item) => item.characterImageFull);

  useEffect(() => {
    async function fetchData() {
      try {
        const authTokens = localStorage.getItem('token')
          ? JSON.parse(localStorage.getItem('token'))
          : null;
 
        const response = await axios.get(
          'http://deploywork.com:2012/api/v1/chat/chat-user-history',
          {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6bnVsbH0sImlhdCI6MTcxNDk4NTkxN30.6GGSkwF9dZ9bMF7dx7179vGnr1QF4xtsMYOavqvXepg` },
          }
        );

        // Handle response data here if needed
        console.log(response.data.body);
        console.log("hello")
      } catch (error) {
        // Handle error
        console.error('Error fetching chat history:', error);
      }
    }

    fetchData(); // Call the function when the component mounts
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col gap-4 px-10 py-4'>
        <h1 className='text-3xl'>Video Chat History</h1>
        <div className='flex flex-col gap-5 bg-white shadow-2xl rounded-xl px-10 py-5 w-[1450px] overflow-auto no-scrollbar  max-h-[850px] font-["Poppins"]'>
          <h1 className='text-2xl'>Video Chat History ({data.length})</h1>
          <div className='grid grid-cols-4 gap-5'>
            {result.map((item, index) => (
              <div key={index} className='rounded-lg bg-white flex items-center justify-between drop-shadow-2xl px-4 py-2 '>
                <div className='flex items-center gap-5 font-medium'>
                  <div className='bg-white rounded-full overflow-hidden'>
                    <img className='w-20 drop-shadow-2xl h-20' src={item.characterImageFull} alt='' />
                  </div>
                  <h2>{item.characterName}</h2>
                </div>
                <div className='bg-[#00000030] rounded-full p-2 px-3 text-sm font-medium cursor-pointer'>
                  <p>Add friend</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
