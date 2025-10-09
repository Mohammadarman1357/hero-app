import { Boxes, BoxesIcon, ChevronDown } from 'lucide-react';
import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../Loading/Loading';
import { getStoredApp } from '../utility/addToDB';

const InstalledApp = React.lazy(() => import('../InstalledApp/InstalledApp'));

const InstalledApps = () => {

    const [installList, setInstallList] = useState([]);
    const [sort, setSort] = useState("");
    const appData = useLoaderData();

    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedStoredApp = storedAppData.map(id => parseInt(id));
        const myInstallList = appData.filter(app => convertedStoredApp.includes(app.id));
        setInstallList(myInstallList);
    }, []);

    const handleUninstall = (id) => {
        const remaining = installList.filter(app => app.id !== id);
        setInstallList(remaining);
    }


    const parseDownloads = (downloads) => {
        const value = parseFloat(downloads);
        if (downloads.includes("M")) {
            return value * 1000000;
        }
        if (downloads.includes("K")) {
            return value * 1000;
        }
        return value;
    }

    const handleSort = (type) => {
        setSort(type);

        if (type === "Size") {
            const sortedBySize = [...installList].sort((a, b) => a.size - b.size);
            setInstallList(sortedBySize);
        }
        if (type === "Low-High") {
            const sortedByLowToHigh = [...installList].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
            setInstallList(sortedByLowToHigh);
        }
        if (type === "High-Low") {
            const sortedByHighToLow = [...installList].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
            setInstallList(sortedByHighToLow);
        }
    }

    return (
        <div className='p-10 md:py-20 md:px-10 inter-font'>

            <span className='text-center'>
                <h1 className='font-bold text-5xl text-[#001931]'><span className='flex justify-center items-center gap-4'>Your Installed Apps <BoxesIcon className='w-20 h-20 text-[#632ee3]'></BoxesIcon> </span></h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </span>

            <div className='flex flex-col md:flex-row items-center justify-between'>

                <h1 className='font-semibold text-2xl text-[#001931] mb-4 md:mb-0'>({installList.length}) Apps Found</h1>

                <details className="dropdown mb-5">
                    <summary className='btn btn-outline border-1 text-[#627382] font-semibold text-xl py-3 px-4'>
                        Sort by : {sort ? sort : ""}
                        <ChevronDown />
                    </summary>

                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => { handleSort("Size") }}>Size</a></li>
                        <li><a onClick={() => { handleSort("Low-High") }}>Low-High</a></li>
                        <li><a onClick={() => { handleSort("High-Low") }}>High-Low</a></li>
                    </ul>
                </details>
            </div>

            <Suspense fallback={<Loading></Loading>}>
                <div className='flex flex-col gap-4'>
                    {
                        installList.map(installedApp =>
                            <InstalledApp key={installedApp.id} installedApp={installedApp} handleUninstall={handleUninstall}></InstalledApp>
                        )
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default InstalledApps;