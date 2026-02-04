<template>
<div class="card mb-3 shadow-sm">
  <div class="card-body">
    <h5>{{ post.title }}</h5>
    <p class="text-muted">{{ post.content.slice(0,120) }}...</p>
    <router-link :to="'/post/'+post.id" class="btn btn-outline-primary btn-sm">
      Xem chi tiết
    </router-link>
  </div>
</div>
</template>

<script setup>
defineProps(['post'])
</script>
