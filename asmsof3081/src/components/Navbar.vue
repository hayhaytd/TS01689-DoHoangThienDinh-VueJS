<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- container = không full, container-fluid = full -->
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/images/Heath-blog.jpg" width="100" alt="Logo">  MyBlog
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-file-text"></i> Bài viết
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-camera-video"></i> Video
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-info-circle"></i> Giới thiệu
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="bi bi-calendar-event"></i> Sự kiện
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-person-circle"></i> Tài khoản
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
              <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
              <li><a class="dropdown-item" href="#">Đăng ký</a></li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">VN</a></li>
          <li class="nav-item"><a class="nav-link" href="#">EN</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>