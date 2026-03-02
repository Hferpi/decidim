import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import { Roles } from '../../shared/types/user'
import { useAppStore } from "../stores/appStore";
import Register from '../views/users/Register.vue'
import EditUsers from '../views/users/EditUsers.vue'
import AllUsers from '../views/users/AllUsers.vue'

const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresAuth: false, roles: [Roles.ADMIN] }
    },
    {
      path: '/all-users',
      name: 'all-users',
      component: AllUsers,
      meta: { requiresAuth: false, roles: [Roles.ADMIN] }
    },
      {
      path: '/edit-user',
      name: 'edit-user',
      component: EditUsers,
      meta: { requiresAuth: false, roles: [Roles.ADMIN] }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true, roles: [Roles.ADMIN, Roles.TEACHER, Roles.STUDENT, Roles.PARENTS] }
    }
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const store = useAppStore();
  const user = store.user;

  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else if (to.meta.roles && user && !(to.meta.roles as Roles[]).includes(user.rol)) {
    next("/login");
  } else {
    next();
  }
})

export default router