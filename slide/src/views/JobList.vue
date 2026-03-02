<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { jobsData } from "../components/jobs"

const router = useRouter()
const jobs = ref(jobsData)

const goDetail = (id) => {
  router.push(`/detail/${id}`)
}

const goEdit = (id) => {
  router.push(`/form?id=${id}`)
}

const deleteJob = (id) => {
  const index = jobsData.findIndex(j => j.id === id)
  if (index !== -1) {
    jobsData.splice(index, 1)
  }
}
</script>

<template>
  <div>
    <div class="mb-3 text-end">
      <button class="btn btn-success" @click="router.push('/form')">
        Thêm công việc
      </button>
    </div>

    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.id }}</td>
          <td>{{ job.title }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="goEdit(job.id)">
              Sửa
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteJob(job.id)">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>