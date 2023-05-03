import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../pages/master/dashboard.vue';
import Home from '../pages/home.vue';
import Profile from '../pages/profile.vue';

const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile
    },
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes
    });
    return router;
}