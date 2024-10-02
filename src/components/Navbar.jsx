import { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logo from '../assets/logo-220x44.jpg'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="section-bg w-full shadow-xl font-roboto">
      <div className='flex justify-between  gap-10 py-3 md:py-5 container mx-auto'>

        <img src={logo} className='ml-2 md:ml-0' alt="" />

        {/*for small device */}
        <ul className={`absolute z-10 w-full h-screen flex flex-col gap-10 justify-center items-center bg-[#e2235e] transform duration-500 ease-in-out ${open ? 'left-0 top-0' : '-top-[2000px]  left-0'} `}>
          <Link to={'/'} className='font-bold text-white hover:text-secondary rounded-md px-1'>CHAT PLANNER</Link>
          <Link to={'/'} className='font-bold text-white hover:text-secondary rounded-md px-1'>SERVICES</Link>
          <Link to={'/'} className='font-bold text-white hover:text-secondary rounded-md px-1'>TESTIMONIAL</Link>
          <Link to={'/'}><button className='bg-secondary  w-36 h-12 items-center justify-center rounded-3xl font-bold text-xl text-white transition ease-in-out duration-200'>Contact</button></Link>
        </ul>

        {/* for medium and large device */}
        <ul className='md:flex hidden items-center space-x-5 '>
          <Link to={'/'} className='font-bold text-secondary hover:text-primary rounded-md px-1'>CHAT PLANNER</Link>
          <Link to={'/'} className='font-bold text-secondary hover:text-primary rounded-md px-1'>SERVICES</Link>
          <Link to={'/'} className='font-bold text-secondary hover:text-primary rounded-md px-1'>TESTIMONIAL</Link>
        </ul>

        <Link to={'/'}><button className='hidden md:flex bg-primary hover:bg-pink-700 rounded-3xl w-36 h-12 items-center justify-center font-bold text-xl text-white transition ease-in-out duration-200'>Contact</button></Link>

        <div className='md:hidden z-20 mr-2 md:mr-0' onClick={() => setOpen(!open)}>
          {
            open ? <GiCrossedBones className='text-4xl text-white' /> : <FaBarsStaggered className='text-4xl text-[#e2235e]' />
          }
        </div>
      </div>

    </nav>
  );
};

export default NavBar;

