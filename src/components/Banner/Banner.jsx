import React from 'react';
import { Link } from 'react-router';
import playstoreImg from '../../assets/playstore.png';
import applestoreImg from '../../assets/apple.png';
import heroImg from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className='inter-font'>
            <div className='p-10 md:p-20'>
                <h1 className='text-center text-[#001931] font-bold text-7xl'>We Build <br />
                    <span className='text-[#632ee3]'>Productive</span> Apps
                </h1>
                <p className='text-center text-[#627382] text-xl mt-2'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex justify-center my-7'>
                    <Link to={'https://play.google.com/store/games?hl=en'}><button className='btn btn-outline border-[#D2D2D2] border-2 font-semibold text-xl text-[#001931] py-6'><span><img src={playstoreImg} alt="" /></span>Google Play</button></Link>
                    <Link to={'https://apps.apple.com/us/app/apple-store/id375380948'}><button className='btn btn-outline border-[#D2D2D2] border-2 font-semibold text-xl text-[#001931] py-6 ml-4'><span><img src={applestoreImg} alt="" /></span>Apple Store</button></Link>
                </div>
                <div className='flex justify-center'>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-b from-[#632ee3] to-[#9f62f2] p-10 md:py-20 md:px-[100px] -mt-10 md:-mt-20'>
                <h1 className='font-bold text-5xl text-white text-center'>Trusted by Millions, Built for You</h1>

                <div className='text-white mt-6 flex flex-col md:flex-row justify-between'>
                    <span className='text-center'>
                        <h6>Total Downloads</h6>
                        <h1 className='font-extrabold text-[64px]'>29.6M</h1>
                        <h6>21% more than last month</h6>
                    </span>
                    <span className='text-center'>
                        <h6>Total Reviews</h6>
                        <h1 className='font-extrabold text-[64px]'>906K</h1>
                        <h6>46% more than last month</h6>
                    </span>
                    <span className='text-center'>
                        <h6>Active Apps</h6>
                        <h1 className='font-extrabold text-[64px]'>132+</h1>
                        <h6>31 more will Launch</h6>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;