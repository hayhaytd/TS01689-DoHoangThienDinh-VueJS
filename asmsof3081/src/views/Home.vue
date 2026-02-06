<script setup>
import { store } from '../store'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

function goDetail(id) {
  router.push('/post/' + id)
}

function goEdit(id) {
  router.push('/edit/' + id)
}

function remove(id) {
  if (confirm('Xóa bài viết này?')) {
    const i = store.posts.findIndex(p => p.id == id)
    if (i > -1) store.posts.splice(i, 1)
  }
}

/* ===== PAGINATION ===== */

const perPage = 4
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.ceil(store.posts.length / perPage)
)

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return store.posts.slice(start, start + perPage)
})

function setPage(p) {
  if (p >= 1 && p <= totalPages.value) {
    currentPage.value = p
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>

<!-- CAROUSEL -->
<div class="container mt-3">
  <div id="carouselE" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
      <button data-bs-target="#carouselE" data-bs-slide-to="0" class="active"></button>
      <button data-bs-target="#carouselE" data-bs-slide-to="1"></button>
      <button data-bs-target="#carouselE" data-bs-slide-to="2"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/CAROUSEL3.jpg" class="d-block w-100" style="height:350px; object-fit:cover">
      </div>
      <div class="carousel-item">
        <img src="/images/CAROUSEL2.jpg" class="d-block w-100" style="height:350px; object-fit:cover">
      </div>
      <div class="carousel-item">
        <img src="/images/CAROUSEL1.jpg" class="d-block w-100" style="height:350px; object-fit:cover">
      </div>
    </div>

    <button class="carousel-control-prev" data-bs-target="#carouselE" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" data-bs-target="#carouselE" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>

  </div>
</div>


<!-- MAIN -->
<div class="container my-5">
<div class="row">

<!-- SIDEBAR -->
<aside class="col-md-4">

<div class="card mb-4 shadow-sm border border-dark">
<div class="card-body">
<h5 class="fw-bold mb-3 fs-5">HealthBlog là gì?</h5>

<p class="small mb-2">
HealthBlog là blog chia sẻ kiến thức về sức khỏe, dinh dưỡng,
vận động và lối sống khoa học dành cho mọi người.
</p>

<p class="small mb-0">
Nội dung thực tế, dễ áp dụng vào thói quen sinh hoạt hàng ngày.
</p>

</div>
</div>

<div class="card shadow-sm border-0">
  <div class="card-header bg-white fw-bold">
    Bài viết mới cập nhật
  </div>

  <div class="card-body">

    <div v-for="p in store.posts.slice(-3).reverse()"
         :key="p.id"
         class="d-flex gap-3 mb-3 border-bottom pb-3">

      <!-- ẢNH -->
      <img :src="p.image"
           style="width:80px;height:70px;object-fit:cover"
           class="rounded">

      <!-- TEXT -->
      <div class="flex-grow-1">

        <div class="fw-bold small">
          {{ p.title }}
        </div>

        <div class="small text-muted">
          {{ p.author }}
        </div>

        <div class="small text-muted mb-1">
          {{ p.date }}
        </div>

        <router-link
          :to="'/post/' + p.id"
          class="btn btn-sm btn-outline-primary">
          Xem
        </router-link>

      </div>

    </div>

  </div>
</div>

</aside>


<!-- POSTS -->
<section class="col-md-8">

<h4 class="mb-4">Danh sách bài viết</h4>

<div class="row g-3">

<div class="col-md-6"
v-for="p in pagedPosts"
:key="p.id">

<div class="card h-100 shadow-sm">

<img :src="p.image"
class="card-img-top"
style="height:200px;object-fit:cover">

<div class="card-body d-flex flex-column">

<h6 class="fw-bold">{{ p.title }}</h6>

<p class="small text-muted flex-grow-1">
{{ p.content.substring(0,80) }}...
</p>

<div class="d-flex gap-2">

<button class="btn btn-outline-primary btn-sm"
@click="goDetail(p.id)">
Xem
</button>

<button v-if="store.user && store.user.name === p.author"
class="btn btn-outline-warning btn-sm"
@click="goEdit(p.id)">
Sửa
</button>

<button v-if="store.user && store.user.name === p.author"
class="btn btn-outline-danger btn-sm"
@click="remove(p.id)">
Xóa
</button>

</div>

</div>
</div>
</div>

</div>


<!-- PAGINATION -->
<nav class="mt-4">
<ul class="pagination justify-content-center">

<li class="page-item"
:class="{ disabled: currentPage === 1 }">
<button class="page-link" @click="setPage(currentPage - 1)">«</button>
</li>

<li class="page-item"
v-for="p in totalPages"
:key="p"
:class="{ active: p === currentPage }">
<button class="page-link" @click="setPage(p)">
{{ p }}
</button>
</li>

<li class="page-item"
:class="{ disabled: currentPage === totalPages }">
<button class="page-link" @click="setPage(currentPage + 1)">»</button>
</li>

</ul>
</nav>

</section>

</div>
</div>

</template>
  