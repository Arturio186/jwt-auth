import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Routes';

const AppRouter : React.FC = () => {
    const browserRouter = createBrowserRouter([...publicRoutes, ...privateRoutes])

    return <RouterProvider router={browserRouter}/>
}

export default AppRouter;