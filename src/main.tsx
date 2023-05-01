import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/error';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Collections from './components/pages/collections/collections'
import ContactUs from './components/pages/contact-us/contactUs';
import Warranty from './components/pages/customer-service/warranty/warranty';
import Quartz from './components/pages/collections/quartz';
import Porcelain from './components/pages/collections/porcelain';
import Maintenance from './components/pages/customer-service/maintenance/maintenance';
import Services from './components/pages/customer-service/services';
import FAQ from './components/pages/customer-service/faq/faq';
import ProductDetail from './components/pages/collections/productDetail';
import { porcelain, quartz } from './constants/data';
import ProductError from './components/pages/collections/productError';
import Showcase from './components/pages/showcase/showcase';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "collections",
        element: <Collections />
      },
      {
        path: "collections/quartz",
        element: <Quartz />
      },
      {
        path: "collections/porcelain",
        element: <Porcelain />
      },
      {
        path: "collections/quartz/:code",
        element: <ProductDetail/>,
        loader: async ({ params }) => {
          return quartz.find(i => i.code.toLowerCase() === params.code)
        },
        errorElement: <ProductError/>
      },
      {
        path: "collections/porcelain/:code",
        element: <ProductDetail/>,
        loader: async ({ params }) => {
          return porcelain.find(i => i.code.toLowerCase() === params.code)
        },
        errorElement: <ProductError/>
      },
      {
        path: "/showcase",
        element: <Showcase/>
      },
      {
        path: "contacts",
        element: <ContactUs />
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "warranty",
        element: <Warranty />
      },
      {
        path: "maintenance",
        element: <Maintenance />
      },
      {
        path: "faq",
        element: <FAQ/>
      }
    ]
  },
]);

////remove to disable effect hooks running twice
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics/>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <RouterProvider router={router} />
// )
