import { createRouter, createWebHistory } from "vue-router"
import JobList from "../views/JobList.vue"
import JobDetail from "../views/JobDetail.vue"
import JobForm from "../views/JobForm.vue"

const routes = [
  { path: "/", component: JobList },
  { path: "/detail/:id", component: JobDetail },
  { path: "/form", component: JobForm }
]

export default createRouter({
  history: createWebHistory(),
  routes
})