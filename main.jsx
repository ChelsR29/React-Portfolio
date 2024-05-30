import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing the pages for routing
import App from './App';
import AboutmePage from './src/pages/AboutmePage';
import ContactPage from './src/pages/ContactPage';
import PortfolioPage from './src/pages/PortfolioPage';
import ResumePage from './src/pages/ResumePage';

// Define the accessible routes and components for the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutmePage />,
      },
      {
        path: 'aboutme',
        element: <AboutmePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

