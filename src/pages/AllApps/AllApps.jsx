import { InfinityIcon, Search } from 'lucide-react';
import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../Loading/Loading';

const AllApp = React.lazy(() => import('../AllApp/AllApp'));
const AppNotFound = React.lazy(() => import('../AppNotFound/AppNotFound'));

const AllApps = () => {

    const allAppData = useLoaderData();

    const [searchValue, setSearchValue] = useState("");

    const filteredResults = allAppData.filter((app) =>
        app.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div className='p-10 md:py-20 md:px-10 inter-font'>

            <span className='text-center'>
                <h1 className='font-bold text-5xl text-[#001931]'><span className='flex justify-center items-center gap-4'>Our All Applications <InfinityIcon className='w-20 h-20 text-[#632ee3]'></InfinityIcon> </span></h1>
                <p className='text-xl text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </span>

            <div className='flex flex-col md:flex-row  justify-between mt-6'>
                <h1 className='font-semibold text-2xl text-[#001931] mb-4 md:mb-0'>({filteredResults.length}) Apps Found</h1>
                <div>

                    <label className='input input-primary'>
                        <span className='flex gap-2 items-center'>
                            <Search ></Search>
                            <input
                                type="search"
                                placeholder="Search App"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </span>
                    </label>

                </div>
            </div>

            <Suspense fallback={<Loading></Loading>}>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-10 gap-4'>
                    {searchValue ? (
                        filteredResults.length > 0 ? (
                            filteredResults.map((data) =>
                                <AllApp key={data.id} data={data}></AllApp>
                            )
                        ) : (
                            <AppNotFound></AppNotFound>
                        )
                    ) : (

                        allAppData.map(data => <AllApp key={data.id} data={data}></AllApp>))
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default AllApps;