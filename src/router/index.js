// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Home from '@/views/home.vue';
import Projects from '@/views/Projects.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
