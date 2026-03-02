import { createRouter, createWebHistory } from "vue-router"
import ChiTiet from "@/components/ChiTiet.vue"

const routes = [
  {
    path: "/room/:id",
    name: "ChiTiet",
    component: ChiTiet
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router