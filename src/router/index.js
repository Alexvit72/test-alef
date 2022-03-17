import { createRouter, createWebHashHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import PreView from '../views/PreView.vue';

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/preview',
    name: 'PreView',
    component: PreView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
