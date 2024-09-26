import { Outlet } from 'react-router-dom';
import img from '../assets/Ovation.jpg'
import Navbar from '../components/Navbar';
const Main = () => {
  return (
    <div className='main-container'>
      <Navbar></Navbar>
      <div className='h- border border-green-600 min-h-[700px] container mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;

