import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

const TrendingApps = ({ trendingData }) => {
    return (
        <div className='p-10 md:py-20 md:px-10 inter-font'>

            <span className='text-center'>
                <h1 className='font-bold text-5xl text-[#001931]'><span className='flex justify-center items-center gap-4'>Trending Apps <TrendingUp className='w-10 h-10 text-[#632ee3]'></TrendingUp> </span></h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </span>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {
                    trendingData.map(trendData => <TrendingApp key={trendData.id} trendData={trendData}></TrendingApp>)
                }
            </div>

            <span className='flex justify-center mt-5'>

                <Link to={'/apps'}>
                    <button className='btn border-none px-6 mt-4 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold text-[16px]'>
                        Show All
                    </button>
                </Link>

            </span>

        </div>
    );
};

export default TrendingApps;