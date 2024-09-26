import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto border border-yellow-600 h-[700px] flex justify-between gap-8 my-8'>

      <div className='border w-2/6 h-full bg-white rounded-2xl p-5'>
        left
      </div>

      <div className='border w-4/6 h-full bg-white rounded-2xl p-5'>
        right
      </div>

    </div>
  )
}

export default Home;