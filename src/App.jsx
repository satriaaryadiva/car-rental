// src/app.js

import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import store from './redux/store.jsx'; // Import Redux store
import routes from './routes'; // Import konfigurasi rute
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${location.pathname}`); // Debugging navigasi
  }, [location]);

  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
      <Analytics />
    </Provider>
  );
};

export default App;
