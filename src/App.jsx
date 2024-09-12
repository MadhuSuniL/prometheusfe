import './App.css';
import './animations.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout/AppLayout';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import GetStarted from './Pages/GetStarted';
import Aliens from './Pages/Aliens';
import AppWelcomeLayout from './Layouts/AppLayout/AppWelcomeLayout';
import NotFound from './Pages/NotFound';
import LoadingScreen from './Pages/LoadingScreen';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);



  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      // Set to true if the window width is less than 900px (common mobile breakpoint)
      setIsMobile(window.innerWidth < 900);
    };

    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Check the window width on initial load
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      Component: AppWelcomeLayout,
      children: [
        {
          index: true,
          Component: GetStarted,
        },
      ],
    },
    {
      path: '/',
      Component: AppLayout,
      children: [
        {
          path: 'aliens',
          Component: Aliens,
        },
        {
          path: 'aliens/:alien_name',
          Component: LoadingScreen,
        },
        {
          path: '*',
          Component: NotFound,
        }
      ],
    },
  ]);

  // Conditional rendering based on device type
  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Please use a desktop to view this application.</h1>
      </div>
    );
  }

  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
