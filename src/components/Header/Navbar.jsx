import React from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/logo.png';
import { Cog, Github, House, MonitorCog } from 'lucide-react';

const Navbar = () => {

    const links = <>

        <Link to={'/'}><li className='ml-2'><button className='focus:underline focus:text-[#632ee3] text-[16px] font-semibold'> <House className='w-5 h-5'></House> Home</button></li></Link>
        <Link to={'/apps'}><li className='ml-2'><button className='focus:underline focus:text-[#632ee3] text-[16px] font-semibold'> <Cog className='w-5 h-5'></Cog> Apps</button></li></Link>
        <Link to={'/installation'}><li className='ml-2'><button className='focus:underline focus:text-[#632ee3] text-[16px] font-semibold'> <MonitorCog className='w-5 h-5'></MonitorCog> Installation</button></li></Link>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm inter-font">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                links
                            }
                        </ul>
                    </div>

                    <Link to={'/'}>
                        <span className="text-[28px] text-[#131313] font-bold flex items-center">
                            <span><img className='w-10 h-10' src={logoImg} alt="" /></span>
                            <span className='ml-2 text-[#632ee3] '>HERO.IO</span>
                        </span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center ">

                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'https://github.com/Mohammadarman1357'}>
                        <button className='btn border-none bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white text-[16px]'>
                            <span> <Github /> </span>
                            <span>Contribute</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;