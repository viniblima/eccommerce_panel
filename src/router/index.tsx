import { FunctionComponent } from 'react';

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { HomeTab, OffersTab, ProductsTab, UsersTab } from '../components';
import { HomePage, LoginPage } from '../pages';
import { AuthGuard } from './AuthGuard';

const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <AuthGuard>
            <HomePage/>
        </AuthGuard>
        ,
        children: [
            { index: true, element: <HomeTab /> },
            {
                path: "/products",
                element: <ProductsTab />
            },
            {
                path: "/offers",
                element: <OffersTab />
            },
            {
                path: "/users",
                element: <UsersTab />
            },
        ]
    },
    {   
        path: "/login",
        element: <LoginPage/>,
    }
]);


const Main: FunctionComponent = () => {

    return (
        <RouterProvider router={router} />
    );
}
export default Main;