import React from 'react'
import botImg from '../assets/bot.png'
import ChatBot from '../components/ChatBot';
import OutlinedButton from '../components/OutlineButton';


const Home = () => {

  return (
    <div className='container mx-auto h-75vh flex flex-col md:flex-row justify-between  gap-8 my-8'>

      <div className=' md:w-2/6 h-full mx-5 md:mx-0 bg-white rounded-2xl p-5 flex flex-col justify-around items-center'>
        <img className='h-52' src={botImg} alt="" />
        <p className='text-center'> Looking for specific ideas for your next meeting, incentive teambuilding or event in Belgium? </p>
        <p className='font-bold text-2xl'>I can help you!</p>
        <OutlinedButton>About Us</OutlinedButton>
      </div>

      <div className=' md:w-4/6 h-full mx-5 md:mx-0 bg-white rounded-2xl p-5'>
        <ChatBot />
        
      </div>

    </div>
  )
}

export default Home;