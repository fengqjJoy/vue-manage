import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main'),
        children: [
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: () => import('../views/home')
            // }, {
            //     path: '/user',
            //     name: 'user',
            //     component: () => import('../views/user')
            // }, {
            //     path: '/mall',
            //     name: 'mall',
            //     component: () => import('../views/mall')
            // }, {
            //     path: '/pageOne',
            //     name: 'pageOne',
            //     component: () => import('../views/other/pageOne.vue')
            // }, {
            //     path: '/pageTwo',
            //     name: 'pageTwo',
            //     component: () => import('../views/other/pageTwo.vue')
            // }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
export default router
