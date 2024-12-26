// src/routes.js
import MainPage from './component/PAGE/MainPage';
import RentalForm from './component/FRAGMENT/RentalForm';
import PaymentQR from './component/FRAGMENT/QRPayment';
import Banner from './component/ATOM/Banner';
import ErrorPage from './component/PAGE/ErrorPage';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/rent/:carId',
    element: <RentalForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/payment/:carId',
    element: <PaymentQR />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <Banner />,
    errorElement: <ErrorPage />,
  }
];

export default routes;
