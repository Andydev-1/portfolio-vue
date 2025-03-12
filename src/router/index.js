import { createRouter, createWebHistory } from 'vue-router';
import signinView from '../views/signinView.vue';
import signupView from '../views/signupView.vue';
import heroView from '../views/heroView.vue';
import SplashView from '../views/SplashView.vue';
const routes = [
    { path: '/signin', component: signinView },
    { path: '/signup', component: signupView },
    { path: '/hero', component: heroView },
    { path: '/', component: SplashView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
