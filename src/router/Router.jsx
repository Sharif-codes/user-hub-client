
import { createBrowserRouter } from 'react-router-dom';
import UsersPage from '../pages/UsersPage';
import MainLayOut from '../MainLayOut/MainLayOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <UsersPage></UsersPage>
      }
    ]
  }
]);

export default router;
