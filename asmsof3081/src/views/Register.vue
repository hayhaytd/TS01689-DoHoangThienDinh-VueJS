<template>
<div class="container mt-4" v-if="post">
<h3>{{ post.title }}</h3>
<p>{{ post.content }}</p>

<hr>

<h5>Bình luận</h5>

<textarea v-model="text" class="form-control mb-2"></textarea>
<button @click="add" class="btn btn-primary btn-sm">Gửi</button>

<ul class="list-group mt-3">
<li class="list-group-item" v-for="c in post.comments">
{{ c }}
</li>
</ul>

</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { store } from '../store'
import { ref } from 'vue'

const route = useRoute()
const text = ref('')

const post = store.posts.find(p=>p.id==route.params.id)

function add(){
  if(text.value) post.comments.push(text.value)
  text.value=''
}
</script>
