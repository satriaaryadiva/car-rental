import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './component/PAGE/MainPage';
import RentalForm from './component/FRAGMENT/RentalForm';
import PaymentQR from './component/FRAGMENT/QRPayment';
import { store } from './redux/store';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/rent/:carId',
    element: <RentalForm />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/payment/:carId',
    element: <PaymentQR />,
    errorElement: <div>Error</div>,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
