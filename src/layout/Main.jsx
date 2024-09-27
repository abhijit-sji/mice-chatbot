import { Outlet } from 'react-router-dom';
import img from '../assets/Ovation.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Main = () => {
  return (
    <div className='main-container md:h-100vh font-robot flex flex-col justify-between'>
      <Navbar></Navbar>
      <div className='border-green-600 min-h-[700px] container mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

