import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import InstalledApp from '../pages/InstalledApp/InstalledApp';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/trendingappData.json'),
                path: "/",
                Component: Home,
            },
            {
                path: "/apps",
                loader: () => fetch('/allApplication.json'),
                Component: AllApps
            },
            {
                path: "/installedapps",
                loader: () => fetch("/allApplication.json"),
                Component: InstalledApps
            },
            {
                path: "/appDetails/:appid",
                loader: () => fetch("/allApplication.json"),
                Component: AppDetails
            }
        ]
    },
]);
