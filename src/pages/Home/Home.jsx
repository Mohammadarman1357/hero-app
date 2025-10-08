import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const trendingData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <TrendingApps trendingData={trendingData}></TrendingApps>
            
        </div>
    );
};

export default Home;