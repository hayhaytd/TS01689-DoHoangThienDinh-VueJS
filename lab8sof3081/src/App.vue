<template>
  <div>
    <!-- HEADER -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          SOF3081 LAB8
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
          <!-- LEFT MENU -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blog">
                Blog List
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/profile/info">
                Profile
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">
                Dashboard
              </router-link>
            </li>
          </ul>

          <!-- RIGHT MENU -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                Login
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- MAIN -->
    <main class="container py-4">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="bg-dark text-light text-center py-3 mt-5">
      <small>SOF3081 - Lab8 - TS01689</small>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
