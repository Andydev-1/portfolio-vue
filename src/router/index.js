import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/Blog.vue'
import Home from '../views/home.vue'
import Resume from '../views/Resume.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/resume', component: Resume },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
