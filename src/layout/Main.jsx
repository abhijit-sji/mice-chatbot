import { Outlet } from 'react-router-dom';
import img from '../assets/Ovation.jpg'
import Navbar from '../components/Navbar';
const Main = () => {
  return (
    <div className='main-container'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div >
  );
};

export default Main;

