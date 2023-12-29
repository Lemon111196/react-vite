import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Todo from '../pages/todo';
const routes = () => {
    return [
        {
            path: '/auth',
            element: <Login/>
        },
        {
            path: '/',
            element: <Dashboard/>
        },
        {
            path: '/todo',
            element: <Todo/>
        }
    ];
};
export default routes;