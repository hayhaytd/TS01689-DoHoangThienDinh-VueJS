<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">

      <!-- LOGO -->
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="/images/Heath-blog.jpg" width="40" height="40" class="rounded">
        <span class="fw-bold">HealthBlog</span>
      </router-link>

      <!-- TOGGLE -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- MENU -->
      <div class="collapse navbar-collapse" id="menu">

        <!-- LEFT -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">
              <i class="bi bi-house"></i> Trang chủ
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/create" active-class="active">
              <i class="bi bi-plus-square"></i> Đăng bài
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/profile" active-class="active">
              <i class="bi bi-person"></i> Hồ sơ
            </router-link>
          </li>

        </ul>

        <!-- RIGHT -->
        <ul class="navbar-nav align-items-lg-center">

          <!-- nếu CHƯA login -->
          <template v-if="!store.user">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="bi bi-box-arrow-in-right"></i> Đăng nhập
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/register">
                Đăng ký
              </router-link>
            </li>
          </template>

          <!-- nếu ĐÃ login -->
          <template v-else>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle"></i>
                {{ store.user.name || 'User' }}
              </a>

              <ul class="dropdown-menu dropdown-menu-end">

                <li>
                  <router-link class="dropdown-item" to="/profile">
                    Hồ sơ
                  </router-link>
                </li>

                <li><hr class="dropdown-divider"></li>

                <li>
                  <button class="dropdown-item" @click="logout">
                    Đăng xuất
                  </button>
                </li>

              </ul>
            </li>
          </template>

        </ul>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { store } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  store.user = null
  router.push('/login')
}
</script>
