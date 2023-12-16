import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
const routes = () => {
    return [
        {
            path: '/auth',
            element: <Login/>
        },
        {
            path: '/',
            element: <Dashboard/>
        }
    ];
};
export default routes;