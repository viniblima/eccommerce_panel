import { FunctionComponent } from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { HomePage, LoginPage } from '../pages';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        action: () => {
            console.log('init');
        },
        loader: () => {
            console.log('loader action');
            return null;
        },
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