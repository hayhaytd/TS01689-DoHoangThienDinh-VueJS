<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">

    <!-- header -->
    <Header />

    <!-- nội dung trang -->
    <main class="flex-fill">
      <router-view />
    </main>

    <!-- footer -->
    <Footer />

  </div>
</template>