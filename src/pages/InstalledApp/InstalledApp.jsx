import React from 'react';
import { removeFromStoredDB } from '../utility/addToDB';
import { Download, Star } from 'lucide-react';
import { toast } from 'react-toastify';

const InstalledApp = ({ installedApp, handleUninstall }) => {

    const { id, title, image, downloads, ratingAvg, size } = installedApp;

    const handleRemove = id => {
        toast.success(`Yahoo!! ${title} Uninstalled Successfully`);

        handleUninstall(id);
        const convertedAppId = JSON.stringify(id);
        removeFromStoredDB(convertedAppId);
    }

    return (
        <div className='bg-white p-4 inter-font shadow-sm flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <span><img src={image} className='w-20 h-20 rounded-[8px]' alt="" /></span>
                <span>
                    <h1 className='font-medium text-[#001931] text-xl'>{title}</h1>

                    <span className='flex gap-4 mt-3'>
                        <span className='text-[#00D390] flex gap-1'>
                            <Download className='w-5 h-5'></Download>
                            <h1 className='font-medium'>{downloads}</h1>
                        </span>
                        <span className='text-[#FF8811] flex gap-1'>
                            <Star className='w-5 h-5'></Star>
                            <h1 className='font-medium'>{ratingAvg}</h1>
                        </span>
                        <span className='text-[#627382]'>{size} MB</span>
                    </span>

                </span>
            </div>
            <div>
                <button onClick={() => handleRemove(id)} className='btn bg-[#00D390] shadow-sm text-white font-semibold'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;