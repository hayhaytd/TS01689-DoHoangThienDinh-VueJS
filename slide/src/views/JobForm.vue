<script setup>
import { ref, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { jobsData } from "../components/jobs" 
// nếu để trong data thì đổi thành ../data/jobs

const router = useRouter()
const route = useRoute()

const form = ref({
  id: null,
  title: "",
  salary: "",
  skills: ""
})

const errors = ref({})
const isEdit = ref(false)

onMounted(() => {
  const id = route.query.id
  if (id) {
    const job = jobsData.find(j => j.id == id)
    if (job) {
      form.value = { ...job }
      isEdit.value = true
    }
  }
})

const saveJob = () => {
  errors.value = {}

  if (!form.value.title) {
    errors.value.title = "Không để trống title"
  }

  if (!form.value.salary || form.value.salary <= 0) {
    errors.value.salary = "Lương phải > 0"
  }

  if (!form.value.skills) {
    errors.value.skills = "Không để trống skills"
  }

  if (Object.keys(errors.value).length === 0) {
    if (isEdit.value) {
      // UPDATE
      const index = jobsData.findIndex(j => j.id === form.value.id)
      jobsData[index] = { ...form.value }
    } else {
      // CREATE
      jobsData.push({
        id: jobsData.length + 1,
        ...form.value
      })
    }

    router.push("/")
  }
}
</script>

<template>
  <div class="card p-4">
    <h4 class="mb-3">
      {{ isEdit ? "Sửa công việc" : "Thêm công việc" }}
    </h4>

    <div class="mb-3">
      <label class="form-label">Title</label>
      <input v-model="form.title" class="form-control" />
      <small class="text-danger">{{ errors.title }}</small>
    </div>

    <div class="mb-3">
      <label class="form-label">Salary</label>
      <input type="number" v-model="form.salary" class="form-control" />
      <small class="text-danger">{{ errors.salary }}</small>
    </div>

    <div class="mb-3">
      <label class="form-label">Skills</label>
      <input v-model="form.skills" class="form-control" />
      <small class="text-danger">{{ errors.skills }}</small>
    </div>

    <button class="btn btn-primary" @click="saveJob">
      Lưu
    </button>
  </div>
</template>