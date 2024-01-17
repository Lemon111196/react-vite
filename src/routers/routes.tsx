import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Todo from '../pages/todo';
import MainLayout from '../layouts/MainLayout';
import BaseLayout from '../layouts/BaseLayout';
import DetailTodo from '../pages/DetailTodo';
import Register from '../pages/Register';
import ProtectedRouter from './ProtectedRouter';
import Posts from '../pages/posts';
import Detail from '../pages/posts/Detail';

const routes = () => {
  return [
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/auth',
      element: <Login />,
    },
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: 'todo',
          element: <BaseLayout />,
          children: [
            {
              path: 'list',
              element: <Todo />
            },
            {

              path: ':id',
              element: <ProtectedRouter component={Todo} />
            }
          ]
        },
        {
          path: 'post',
          element: <BaseLayout />,
          children: [
            {
              path: 'list',
              element: <Posts />,
            },
            {
              path:':id',
              element: <Detail/> 
            }
          ]
        }
      ]
    }
  ];
};
export default routes;