//Lazy Loading

import {createRouter, createWebHistory} from 'vue-router'

//This method will load all the imported page
//import Home from '../views/Home.vue'
//import About from '../views/About.vue'
//import Games from '../views/Games.vue'

//This method only load the browsing page
const Home = () => import('../views/Home.vue')

//Directly import the page in the routes path
const routes = [
    { path: '/', component: Home},
    { path: '/about', component: ()=> import('../views/About.vue')},
    { path: '/games', component: ()=> import('../views/Games.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
