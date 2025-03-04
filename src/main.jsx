import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BdViewSpot from './components/AllCountryData/BdSpotData/BdViewSpot';
import BdViewDetailsPage from './components/AllCountryData/BdSpotData/BdViewDetailsPage';
import ThaiAlldata from './components/AllCountryData/ThailandData/ThaiAlldata';
import ThaiSpecificSpotDetails from './components/AllCountryData/ThailandData/ThaiSpecificSpotDetails';
import IndoData from './components/AllCountryData/IndonesiaData/IndoData';
import IndoSpecificSpotDetails from './components/AllCountryData/IndonesiaData/IndoSpecificSpotDetails';
import MalaysiaAllData from './components/AllCountryData/Malaysia/MalaysiaAllData';
import MalaysiaSpecificDetails from './components/AllCountryData/Malaysia/MalaysiaSpecificDetails';
import AuthContext from './AuthProverder/AuthContext';
import AddTouristSpot from './components/AddTouristSpot/AddTouristSpot';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VietnamAllSpot from './components/AllCountryData/Vietnam/VietnamAllSpot';
import VietnamViewDetails from './components/AllCountryData/Vietnam/VietnamViewDetails';
import CombodiaAllData from './components/AllCountryData/Combodia/CombodiaAllData';
import CombodiaViewDetails from './components/AllCountryData/Combodia/CombodiaViewDetails';
import AllTouristSpot from './components/AllSpot/AllTouristSpot';
import AllDataViewDetails from './components/AllSpot/AllDataViewDetails';
import Mylist from './components/Mylist/Mylist';
import UpdateSpot from './components/UpdateSpot/UpdateSpot';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addSpot',
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
      },
      {
        path: '/bdviewDetails',
        element: <BdViewSpot></BdViewSpot>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/data')
      },
      {
        path: '/viewDetails/:id',
        element: <BdViewDetailsPage></BdViewDetailsPage>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/data')
      },
      {
        path: '/thiaViewDetails',
        element: <ThaiAlldata></ThaiAlldata>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/thaiData')
      },
      {
        path: '/thaiviewDetails/:id',
        element: <ThaiSpecificSpotDetails></ThaiSpecificSpotDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/thaiData')
      },
      {
        path: '/indovViewDetails',
        element: <IndoData></IndoData>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/indoData')
      },
      {
        path: '/indoviewDetails/:id',
        element: <IndoSpecificSpotDetails></IndoSpecificSpotDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/indoData')
      },
      {
        path: '/malViewDetails',
        element: <MalaysiaAllData></MalaysiaAllData>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/malData')
      },
      {
        path: '/malviewDetails/:id',
        element: <MalaysiaSpecificDetails></MalaysiaSpecificDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/malData')
      },
      {
        path: '/vietViewDetails',
        element: <VietnamAllSpot></VietnamAllSpot>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/vietData')
      },
      {
        path: '/vietviewDetails/:id',
        element: <VietnamViewDetails></VietnamViewDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/vietData')
      },
      {
        path: '/comboViewDetails',
        element: <CombodiaAllData></CombodiaAllData>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/colombiaData')
      },
      {
        path: '/comboviewDetails/:id',
        element: <CombodiaViewDetails></CombodiaViewDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/colombiaData')
      },
      {
        path: '/allSpot',
        element: <PrivateRoute><AllTouristSpot></AllTouristSpot></PrivateRoute>
      },
      {
        path: '/allDataViewDetails/:id',
        element: <AllDataViewDetails></AllDataViewDetails>,
        loader: () => fetch('https://tourism-managment-server-site.vercel.app/allSpotData')
      },
      {
        path: '/myList',
        element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,
      },
      {
        path: '/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) => fetch(`https://tourism-managment-server-site.vercel.app/addspot/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <AuthContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContext>
  </>,
)
