import { Download, Star, UserStar } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredDB, getStoredApp } from '../utility/addToDB';
import { toast } from 'react-toastify';

const AppDetails = () => {

    const [isInstalled, setIsInstalled] = useState(false);

    const { appid } = useParams();
    const id = parseInt(appid);
    const appData = useLoaderData();
    const singleData = appData.find(app => app.id === id);

    const { title, image, companyName, description, size, ratingAvg, reviews, downloads, ratings } = singleData;

    const ratingChartData = ratings.map(ratingData => {
        const rating = {
            name: ratingData.name,
            count: ratingData.count
        }
        return rating;
    });

    useEffect(() => {
        const installedApps = getStoredApp();
        if (installedApps.includes(appid)) {
            setIsInstalled(true);
        }
    }, [appid]);

    const handleInstall = id => {
        toast.success(`Yahoo!! ${title} Installed Successfully`);
        addToStoredDB(id);
        setIsInstalled(true);
    }

    return (
        <div className='inter-font'>
            <div className='flex flex-col md:flex-row gap-7 items-center border-b-1 border-b-[#001931] mt-10 md:mt-20 md:mx-20 pb-20'>
                <div className=''>
                    <img className='w-[350px] h-[350px] shadow-md rounded-[4px]' src={image} alt="" />
                </div>

                <div className='flex-1'>
                    <h1 className='text-[#001931] font-bold text-3xl mb-4'>{title}</h1>
                    <h1 className='text-[#627382] text-xl'>Developed by <span className='text-[#632ee3] font-semibold'> {companyName} </span></h1>
                    <hr className='border-[#001931] my-4' />

                    <div className='flex items-center gap-8 mb-4'>
                        <span>
                            <Download className='text-[#00827A] w-10 h-10'></Download>
                            <p className='text-[#001931] mt-3'>Downloads</p>
                            <h1 className='text-[#001931] font-extrabold text-[40px]'>{downloads}</h1>
                        </span>
                        <span>
                            <Star className='text-[#FF8811] w-10 h-10'></Star>
                            <p className='text-[#001931] mt-3'>Average Ratings</p>
                            <h1 className='text-[#001931] font-extrabold text-[40px]'>{ratingAvg}</h1>
                        </span>
                        <span>
                            <UserStar className='text-[#632ee3] w-10 h-10'></UserStar>
                            <p className='text-[#001931] mt-3'>Total Reviews</p>
                            <h1 className='text-[#001931] font-extrabold text-[40px]'>{reviews}</h1>
                        </span>
                    </div>

                    <button onClick={() => handleInstall(appid)}
                        disabled={isInstalled} className='btn skeleton text-white bg-[#00D390]' >
                        {isInstalled === true ? 'Installed' : `Install Now (${size} MB)`}
                    </button>

                </div>
            </div>

            <div className='p-10 md:p-20'>
                <h1 className='font-semibold text-2xl text-[#001931] mb-4'>Ratings</h1>
                <div className='hidden md:flex'>
                    <BarChart width={1200} height={500} data={ratingChartData} layout='vertical'>
                        <Tooltip />
                        <XAxis type='number' dataKey={'count'}></XAxis>
                        <YAxis type='category' dataKey={'name'} reversed></YAxis>
                        <Bar dataKey="count" fill='#FF8811'></Bar>
                    </BarChart>
                </div>
                <hr className='border-[#001931]' />
            </div>

            <div className='px-10 md:pb-20 md:px-20'>
                <h1 className='font-semibold text-2xl text-[#001931] mb-4'>Description</h1>
                <p className='text-[#627382] text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;