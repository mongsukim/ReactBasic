import Users from './pages/Users';
import User from './pages/User';

import Movies from './pages/Movies'
import Home from './pages/Home';


export default [
{
    path:'/',
    component: Home
},
{
    path:'/movies',
    component: Movies
},
{
    path:'/users',
    component: Users
},
{
    path:'/users/:id',
    component: User
},

]