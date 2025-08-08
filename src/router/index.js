<<<<<<< HEAD
import { createRouter, createWebHistory } from 'vue-router';
import Blog from '../views/Blog.vue'
import Home from '../views/home.vue'
import Resume from '../views/Resume.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/resume', component: Resume },
=======
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import HomeView from '@/views/HomeView.vue';
import CarsView from '@/views/CarsView.vue';
import CarDetailView from '@/views/CarDetailView.vue';
import CartView from '@/views/CartView.vue';

const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: HomeView 
    },
    { 
        path: '/cars', 
        name: 'Cars',
        component: CarsView 
    },
    { 
        path: '/cars/:id', 
        name: 'CarDetail',
        component: CarDetailView 
    },
    { 
        path: '/cart', 
        name: 'Cart',
        component: CartView 
    },
    { 
        path: '/featured', 
        name: 'Featured',
        component: CarsView,
        props: { featuredOnly: true }
    },
    { 
        path: '/about', 
        name: 'About',
        component: () => import('@/views/AboutView.vue')
    },
    { 
        path: '/contact', 
        name: 'Contact',
        component: () => import('@/views/ContactView.vue')
    },
    // Legacy routes redirects
    { 
        path: '/projects', 
        redirect: '/cars'
    },
    // Catch all 404
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
>>>>>>> f73cf9e4394cdd5da92d32a8ab48aa0eee2bd59c
];

const router = createRouter({
    history: createWebHistory(),
<<<<<<< HEAD
    routes
=======
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
>>>>>>> f73cf9e4394cdd5da92d32a8ab48aa0eee2bd59c
});

export default router;
