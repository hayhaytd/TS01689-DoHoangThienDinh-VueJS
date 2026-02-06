<script setup>
import { useRoute } from 'vue-router'
import { store } from '../store'
import { ref } from 'vue'

const route = useRoute()
const text = ref('')

const post = store.posts.find(p => p.id == route.params.id)

function add() {
  if (!text.value || !post) return

  const now = new Date()

  const time =
    now.toLocaleDateString() + ' ' +
    now.toLocaleTimeString().slice(0,5)

  post.comments.push({
    author: store.user?.name || 'Khách',
    content: text.value,
    time: time
  })

  text.value = ''
}
</script>

<template>

<div class="container mt-4" v-if="post">

  <!-- TITLE -->
  <h3 class="fw-bold mb-2">
    {{ post.title }}
  </h3>

  <!-- META -->
  <div class="text-muted mb-3">
    {{ post.author }} — {{ post.date }}
  </div>

  <!-- IMAGE -->
  <img :src="post.image"
       class="img-fluid rounded mb-4"
       style="max-height:420px;object-fit:cover;width:100%">

  <!-- CONTENT -->
  <div class="mb-4" style="white-space:pre-line">
    {{ post.content }}
  </div>

  <hr>

  <!-- COMMENT BOX -->
  <h5 class="mb-3">Bình luận</h5>

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

  <!-- COMMENT LIST -->
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

      <div>
        {{ c.content }}
      </div>

    </li>

  </ul>

</div>

<!-- NOT FOUND -->
<div v-else class="container mt-4">
  <div class="alert alert-warning">
    Không tìm thấy bài viết
  </div>
</div>

</template>
