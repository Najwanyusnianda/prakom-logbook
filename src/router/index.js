import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/your_task',
        name: 'YourTask',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/YourTask.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router