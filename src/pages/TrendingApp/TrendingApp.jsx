import { Download, Star } from 'lucide-react';
import React from 'react';

const TrendingApp = ({ trendData }) => {

    const { image, title, ratingAvg, downloads } = trendData;

    return (
        <div className='bg-white p-4 rounded-[4px] hover:-translate-y-2 shadow-md inter-font'>
            <span><img className='rounded-[8px] w-full h-[240px]' src={image} alt="" /></span>

            <h1 className='my-3 font-medium text-[#001931]'>{title}</h1>

            <span className='flex justify-between'>
                <button className='rounded-[4px] py-1 px-3 bg-[#F1F5E8] text-[#00D390] font-medium'> <span className='flex items-center gap-1'> <Download className='w-4 h-4'></Download> {downloads} </span></button>
                <button className='rounded-[4px] py-1 px-3 bg-[#FFF0E1] text-[#FF8811] font-medium'> <span className='flex items-center gap-1'> <Star className='w-4 h-4'></Star> {ratingAvg} </span></button>
            </span>
        </div>
    );
};

export default TrendingApp;