import React from 'react'
import botImg from '../assets/bot.png'
import ChatBot from '../components/ChatBot';
import OutlinedButton from '../components/OutlineButton';


const Home = () => {

  return (
    <div className='container mx-auto md:h-75vh flex flex-col md:flex-row justify-center font-roboto gap-8 my-8'>

      <div className=' md:w-[440px] h-full mx-5 md:mx-0 bg-white rounded-2xl p-10 flex  flex-col justify-center items-center gap-12'>
        <img className='h-32' src={botImg} alt="" />
        <p className='text-center text-base leading-10 text-gray-700'> Looking for specific ideas for your next meeting, incentive teambuilding or event in Belgium? </p>
        <p className='font-bold text-xl'>I can help you!</p>
        <OutlinedButton>About Us</OutlinedButton>
      </div>

      <div className='md:w-[440px] mx-5 md:mx-0 bg-white rounded-2xl p-5'>
        <ChatBot />
      </div>

    </div>
  )
}

export default Home;