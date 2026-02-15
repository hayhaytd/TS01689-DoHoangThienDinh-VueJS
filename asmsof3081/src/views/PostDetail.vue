<script setup>
import { useRoute, useRouter } from 'vue-router'
import { store } from '../store'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const text = ref('')

const post = store.posts.find(p => p.id == route.params.id)


function add() {

  if (!store.user) {
    alert('Bạn phải đăng nhập để bình luận')
    router.push('/login')
    return
  }

  if (!text.value.trim()) return

  post.comments.push({
    author: store.user.name,
    content: text.value,
    time: new Date().toLocaleString()
  })

  text.value = ''
}
</script>

<template>

<div class="container mt-4" v-if="post">

  <h3 class="fw-bold mb-2">{{ post.title }}</h3>


  <div class="text-muted mb-3">
    {{ post.author }} — {{ post.date }}
  </div>


  <img :src="post.image"
       class="img-fluid rounded mb-4"
       style="max-height:420px;object-fit:cover;width:100%">


  <div class="mb-4" style="white-space:pre-line">
    {{ post.content }}
  </div>

  <hr>


  <h5 class="mb-3">Bình luận</h5>


  <div v-if="!store.user" class="alert alert-warning">
    Bạn phải đăng nhập để bình luận
  </div>


  <div v-else>
    <textarea
      v-model="text"
      class="form-control mb-2"
      rows="3"
      placeholder="Nhập bình luận...">
    </textarea>

    <button @click="add"
            class="btn btn-primary btn-sm">
      Gửi bình luận
    </button>
  </div>


  <ul class="list-group mt-4">

    <li class="list-group-item"
        v-for="(c,i) in post.comments"
        :key="i">

      <div class="fw-bold small">
        {{ c.author }}
        <span class="text-muted">
          — {{ c.time || '' }}
        </span>
      </div>

      <div>{{ c.content }}</div>

    </li>

  </ul>

</div>


<div v-else class="container mt-4">
  <div class="alert alert-warning">
    Không tìm thấy bài viết
  </div>
</div>

</template>
