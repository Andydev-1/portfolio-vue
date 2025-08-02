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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
