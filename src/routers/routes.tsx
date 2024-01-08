import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login';
import Todo from '../pages/todo';
import MainLayout from '../layouts/MainLayout';
import BaseLayout from '../layouts/BaseLayout';
import DetailTodo from '../pages/DetailTodo';
import Register from '../pages/Register';

const routes = () => {
  return [
    {
      path: '/register',
      element: <Register/>
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
      path: '/todo',
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
              element: <DetailTodo />
            }
          ]
        }
      ]
    }
  ];
};
export default routes;