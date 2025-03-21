import { createHashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/test';
import Contact from './pages/Contact';
import App from './App'

const router = createHashRouter([
  {
    path: '/',
    element: <App />, // App 组件作为根路由
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export { router };