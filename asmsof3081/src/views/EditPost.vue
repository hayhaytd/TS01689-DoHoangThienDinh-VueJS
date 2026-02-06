<script setup>
import { useRoute, useRouter } from 'vue-router'
import { store } from '../store'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const post = store.posts.find(p => p.id == route.params.id)

const title = ref(post?.title || '')
const content = ref(post?.content || '')
const image = ref(post?.image || '')


function pickFile(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    image.value = reader.result
  }
  reader.readAsDataURL(file)
}


function save() {
  post.title = title.value
  post.content = content.value
  post.image = image.value

  router.push('/post/' + post.id)
}
</script>

<template>
<div class="container mt-4" style="max-width:700px" v-if="post">

  <h4 class="mb-3">Chỉnh sửa bài viết</h4>

  <input v-model="title"
         class="form-control mb-2"
         placeholder="Tiêu đề">

  <textarea v-model="content"
            class="form-control mb-3"
            rows="6"
            placeholder="Nội dung"></textarea>


  <label class="form-label fw-bold">Link ảnh</label>
  <input v-model="image"
         class="form-control mb-3"
         placeholder="https://...">


  <label class="form-label fw-bold">Hoặc chọn ảnh từ máy</label>
  <input type="file"
         class="form-control mb-3"
         accept="image/*"
         @change="pickFile">


  <div v-if="image" class="mb-3">
    <img :src="image"
         class="img-fluid rounded shadow-sm"
         style="max-height:250px;object-fit:cover">
  </div>

  <button @click="save"
          class="btn btn-warning">
    Lưu thay đổi
  </button>

</div>
</template>
