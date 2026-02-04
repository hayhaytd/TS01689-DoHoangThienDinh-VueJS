<template>
<div class="container mt-4" style="max-width:600px">
<h4>Tạo bài viết</h4>

<input v-model="title" class="form-control mb-2" placeholder="Tiêu đề">
<textarea v-model="content" class="form-control mb-3"></textarea>

<button @click="save" class="btn btn-success">
Đăng bài
</button>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { store } from '../store'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const router = useRouter()

function save(){
  store.posts.push({
    id: Date.now(),
    title: title.value,
    content: content.value,
    comments: []
  })
  router.push('/')
}
</script>
