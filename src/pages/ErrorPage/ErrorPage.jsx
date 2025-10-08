import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import errorImg from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='inter-font max-w-7xl mx-auto'>
            <Navbar></Navbar>

            <div className='p-10 md:p-20 text-center'>

                <span className='flex justify-center'><img src={errorImg} alt="" /></span>
                <h1 className='font-semibold text-5xl text-[#001931] mt-2'>Oops, page not found!</h1>
                <p className='text-xl text-[#627382]'>The page you are looking for is not available.</p>

                <Link to={'/'}>
                    <button className='btn border-none mt-4 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-[16px]'>
                        Go Back
                    </button>
                </Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;