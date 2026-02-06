import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetail from '../views/PostDetail.vue'
import EditPost from '../views/EditPost.vue'

import { store } from '../store'

const routes = [
  { path: '/', component: Home },

  { path: '/login', component: Login },
  { path: '/register', component: Register },

  { path: '/post/:id', component: PostDetail },

  /* ===== CẦN LOGIN ===== */
  { path: '/profile', component: Profile, meta: { auth: true } },
  { path: '/create', component: CreatePost, meta: { auth: true } },

  /* ===== SỬA BÀI ===== */
  { path: '/edit/:id', component: EditPost, meta: { auth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
