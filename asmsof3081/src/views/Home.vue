<template>
  <!-- CAROUSEL -->
  <div class="container mt-4">
    <div class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner rounded shadow-sm">

        <div class="carousel-item active">
          <img src="https://picsum.photos/1200/350?health" class="d-block w-100">
        </div>

        <div class="carousel-item">
          <img src="https://picsum.photos/1200/350?fitness" class="d-block w-100">
        </div>

      </div>
    </div>
  </div>

  <!-- MAIN -->
  <div class="container my-5">
    <div class="row">

      <!-- SIDEBAR -->
      <aside class="col-md-4">

        <div class="card mb-4 shadow-sm">
          <div class="card-body text-center">
            <h5 class="fw-bold">Về HealthBlog</h5>
            <p class="small text-muted">
              Chia sẻ kiến thức sức khỏe, dinh dưỡng và lối sống lành mạnh.
            </p>
          </div>
        </div>

        <!-- CATEGORY -->
        <div class="list-group shadow-sm mb-4">
          <div class="list-group-item bg-primary text-white">
            Chuyên mục
          </div>

          <div class="list-group-item d-flex justify-content-between">
            Dinh dưỡng
            <span class="badge bg-primary">{{ posts.length }}</span>
          </div>

          <div class="list-group-item d-flex justify-content-between">
            Tập luyện
            <span class="badge bg-primary">4</span>
          </div>

          <div class="list-group-item d-flex justify-content-between">
            Lối sống
            <span class="badge bg-primary">6</span>
          </div>
        </div>

        <!-- FEATURED SMALL -->
        <div class="card shadow-sm">
          <div class="card-header bg-white fw-bold">
            Bài nổi bật
          </div>

          <div class="card-body">

            <div
              v-for="p in posts.slice(0,3)"
              :key="p.id"
              class="d-flex gap-2 mb-3"
            >
              <img :src="p.image"
                   style="width:70px;height:70px;object-fit:cover"
                   class="rounded">

              <div>
                <div class="fw-bold small">{{ p.title }}</div>
                <div class="text-muted small">{{ p.date }}</div>
              </div>

            </div>

          </div>
        </div>

      </aside>

      <!-- POST LIST -->
      <section class="col-md-8">

        <h4 class="mb-4">Danh sách bài viết</h4>

        <div class="row g-3">

          <div
            class="col-md-6"
            v-for="p in posts"
            :key="p.id"
          >
            <div class="card h-100 shadow-sm">

              <img :src="p.image" class="card-img-top">

              <div class="card-body d-flex flex-column">

                <h6 class="fw-bold">{{ p.title }}</h6>

                <p class="small text-muted flex-grow-1">
                  {{ p.summary }}
                </p>

                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="goDetail(p.id)"
                >
                  Xem chi tiết
                </button>

              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goDetail(id) {
  router.push('/post/' + id)
}

const posts = [
  {
    id: 1,
    title: 'Dinh dưỡng khoa học',
    summary: 'Chế độ ăn cân bằng giúp cơ thể khỏe mạnh.',
    image: 'https://picsum.photos/400/250?food',
    date: '01/01/2026'
  },
  {
    id: 2,
    title: 'Tập thể dục mỗi ngày',
    summary: 'Vận động giúp tăng đề kháng.',
    image: 'https://picsum.photos/400/250?gym',
    date: '02/01/2026'
  },
  {
    id: 3,
    title: 'Giấc ngủ chất lượng',
    summary: 'Ngủ đủ giúp phục hồi cơ thể.',
    image: 'https://picsum.photos/400/250?sleep',
    date: '03/01/2026'
  },
  {
    id: 4,
    title: 'Sức khỏe tinh thần',
    summary: 'Giữ tinh thần tích cực.',
    image: 'https://picsum.photos/400/250?mind',
    date: '04/01/2026'
  }
]
</script>