import { createRouter, createWebHistory } from 'vue-router';

// Import your pages/components
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';
import Portfolio from '../views/Portfolio.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/portfolio', component: Portfolio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
