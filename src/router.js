import { createRouter, createWebHistory } from 'vue-router';
import UserList from './components/UserList.vue'; // Corrected import
import AddUser from './components/AddUser.vue';
import EditUser from './components/EditUser.vue';

const routes = [
  { path: '/users', component: UserList },
  { path: '/users/:id', component: EditUser },
  { path: '/add-user', component: AddUser }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
