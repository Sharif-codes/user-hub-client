
import { createBrowserRouter } from 'react-router-dom';
import UsersPage from '../pages/UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersPage />
  }
]);

export default router;
