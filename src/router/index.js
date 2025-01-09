import { createRouter, createWebHistory } from 'vue-router';
import SignInPage from '@/views/SignInPage.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'SignIn',
        component: SignInPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
