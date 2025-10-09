import React, { Suspense } from 'react';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';
import Loading from '../Loading/Loading';

const Banner = React.lazy(() => import('../../components/Banner/Banner'));

const Home = () => {

    const trendingData = useLoaderData();

    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Banner></Banner>
            </Suspense>
            <TrendingApps trendingData={trendingData}></TrendingApps>
        </div>
    );
};

export default Home;