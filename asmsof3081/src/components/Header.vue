<script setup>
import { store } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  store.user = null
  router.push('/login')
}
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div class="container">

    <!-- LOGO -->
    <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
      <img src="/images/Heath-blog.jpg"
           width="40"
           height="40"
           class="rounded">
      <span class="fw-bold">HealthBlog</span>
    </router-link>

    <!-- TOGGLE -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- MENU -->
    <div class="collapse navbar-collapse" id="menu">

      <!-- LEFT -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">
            Trang chủ
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/create" active-class="active">
            Đăng bài
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/profile" active-class="active">
            Hồ sơ
          </router-link>
        </li>

      </ul>

      <!-- RIGHT -->
      <ul class="navbar-nav align-items-lg-center">

        <!-- ===== CHƯA LOGIN ===== -->
        <template v-if="!store.user">

          <li class="nav-item">
            <router-link class="nav-link" to="/login">
              Đăng nhập
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/register">
              Đăng ký
            </router-link>
          </li>

        </template>

        <!-- ===== ĐÃ LOGIN ===== -->
        <template v-else>

          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle d-flex align-items-center gap-2"
               data-bs-toggle="dropdown"
               style="cursor:pointer">

              <!-- AVATAR -->
              <img
                :src="store.user.avatar || 'https://i.pravatar.cc/40'"
                width="32"
                height="32"
                class="rounded-circle border border-light"
                style="object-fit:cover"
              >

              <!-- NAME -->
              <span>{{ store.user.name }}</span>

            </a>

            <ul class="dropdown-menu dropdown-menu-end">

              <li>
                <router-link class="dropdown-item" to="/profile">
                  Hồ sơ
                </router-link>
              </li>

              <li>
                <router-link class="dropdown-item" to="/create">
                  Đăng bài mới
                </router-link>
              </li>

              <li><hr class="dropdown-divider"></li>

              <li>
                <button class="dropdown-item text-danger" @click="logout">
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
