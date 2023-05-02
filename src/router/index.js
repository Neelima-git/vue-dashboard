import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../pages/master/dashboard.vue';
const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    }
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