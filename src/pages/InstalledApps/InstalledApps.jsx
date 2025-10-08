import { Boxes, BoxesIcon, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const InstalledApps = () => {

    const appData = useLoaderData();

    const [sort, setSort] = useState("");

    const handleSort = (type) => {
        setSort(type);

        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === "rating") {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
        }
    }

    return (
        <div className='p-10 md:py-20 md:px-10 inter-font'>

            <span className='text-center'>
                <h1 className='font-bold text-5xl text-[#001931]'><span className='flex justify-center items-center gap-4'>Your Installed Apps <BoxesIcon className='w-20 h-20 text-[#632ee3]'></BoxesIcon> </span></h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </span>

            <div className='flex items-center justify-between'>

                <h1 className='font-semibold text-2xl text-[#001931] mb-4 md:mb-0'>({appData.length}) Apps Found</h1>

                <details className="dropdown mb-5">
                    <summary className='btn btn-outline border-1 text-[#627382] font-semibold text-xl py-3 px-4'>
                        Sort by : {sort ? sort : ""}
                        <ChevronDown />
                    </summary>

                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => { handleSort("pages") }}>Pages</a></li>
                        <li><a onClick={() => { handleSort("rating") }}>Rating</a></li>
                    </ul>
                </details>
            </div>
        </div>
    );
};

export default InstalledApps;