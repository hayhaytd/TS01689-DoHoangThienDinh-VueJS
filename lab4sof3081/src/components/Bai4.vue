<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in items" :key="index">
        <div class="card">
          <img :src="item.image" class="card-img-top" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import img1 from '../assets/spinach_300x300.jpg'
import img2 from '../assets/sesameoil_300x300.jpg'
import img3 from '../assets/orange_300x300.jpg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người...',
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: 'Một số loại gia vị tốt như gừng, nghệ, tỏi, quế...',
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: 'Đậu lăng, đậu nành, đậu đỏ, đậu xanh...',
    image: img3
  }
]
</script>
