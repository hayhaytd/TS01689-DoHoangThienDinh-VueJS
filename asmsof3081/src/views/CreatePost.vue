<script setup>
import { ref } from 'vue'
import { store } from '../store'
import { useRouter } from 'vue-router'

const title = ref('')
const content = ref('')
const image = ref('')
const router = useRouter()

function handleFile(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => image.value = reader.result
  reader.readAsDataURL(file)
}

function save() {
  if (!title.value || !content.value) return

  store.posts.unshift({
    id: Date.now(),
    title: title.value,
    content: content.value,
    author: store.user?.name || 'Ẩn danh',
    date: new Date().toLocaleDateString(),
    image: image.value || 'https://picsum.photos/600/350?random',
    comments: []
  })

  router.push('/')
}
</script>

<template>
<div class="container mt-5" style="max-width:650px">

<div class="card shadow">
<div class="card-body">

<h4 class="mb-3">Tạo bài viết mới</h4>

<label class="form-label">Tiêu đề</label>
<input v-model="title" class="form-control mb-3">

<label class="form-label">Nội dung</label>
<textarea v-model="content" rows="5" class="form-control mb-3"></textarea>

<label class="form-label">Ảnh bài viết</label>
<input type="file" class="form-control mb-3" @change="handleFile">

<img v-if="image" :src="image" class="img-fluid rounded mb-3">

<button @click="save" class="btn btn-success w-100">
Đăng bài
</button>

</div>
</div>

</div>
</template>
