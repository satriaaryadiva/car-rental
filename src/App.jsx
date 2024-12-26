// src/app.js
 
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './redux/store.jsx'; // Import store Redux
import routes from './routes'; // Pisahkan rute ke file tersendiri
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)} />
      <Analytics />
    </Provider>
  );
};

export default App;
