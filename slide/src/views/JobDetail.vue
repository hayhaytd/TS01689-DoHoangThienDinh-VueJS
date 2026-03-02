<script setup>
import { useRoute } from "vue-router"
import { jobsData } from "../components/jobs"

const route = useRoute()
const id = Number(route.params.id)

const job = jobsData.find(j => j.id === id)
</script>

<template>
  <div v-if="job" class="card p-4">
    <h4>{{ job.title }}</h4>
    <p><strong>Lương:</strong> {{ job.salary }}</p>
    <p><strong>Kỹ năng:</strong> {{ job.skills }}</p>
  </div>
</template>