import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ShopingCart from "../pages/ShopingCart";

export const router = createBrowserRouter ([
{
    path: '/',
    element: <Home/>,
    errorElement: <NotFound/>
},
{
    path: 'Products',
    element: <Products/>,
    errorElement: <NotFound/>
},
{
    path: 'About',
    element: <About/>,
    errorElement: <NotFound/>
},
{
    path: 'Contact',
    element: <Contact/>,
    errorElement: <NotFound/>
},
{
    path: 'ShopingCart',
    element: <ShopingCart/>,
    errorElement: <NotFound/>
}
])