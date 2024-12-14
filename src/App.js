import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import 'normalize.css';
import './styles/common.css';
import RestaurantListContainer from './components/RestaurantListContainer';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RestaurantListContainer />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetails />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ],
    errorElement: <div>Hello World</div>
  }
]);

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
