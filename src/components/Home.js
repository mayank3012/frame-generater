import React from 'react'

const Home = ({ OnPgaeChange}) => {
  return (
  <> 
      <div className='bg-red-900 h-28 bg-opacity-70 flex justify-center items-center'>
        <button onClick={() => { OnPgaeChange("Frame-generater") }} className='bg-green-900 bg-opacity-80 text-white px-8 py-2 text-xl'>
          Get Profile Frame
        </button>
      </div>
      <div className='w-[95%] mx-auto h-96 mt-16 bg-white'>
        <img src='/frame/main.jpeg'></img>
      </div>
        </>
  )
}

export default Home