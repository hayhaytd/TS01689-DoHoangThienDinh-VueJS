<script setup>
import { store } from '../store'
import { ref } from 'vue'

/* ===== clone dữ liệu user ra form ===== */
const name = ref(store.user?.name || '')
const email = ref(store.user?.email || '')
const pass = ref(store.user?.pass || '')
const avatar = ref(store.user?.avatar || 'https://i.pravatar.cc/150')

/* ===== xử lý chọn ảnh ===== */
function onFile(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => avatar.value = reader.result
  reader.readAsDataURL(file)
}

/* ===== lưu ===== */
function save() {
  if (!store.user) return

  store.user.name = name.value
  store.user.email = email.value
  store.user.pass = pass.value
  store.user.avatar = avatar.value

  /* cập nhật luôn trong danh sách users */
  const u = store.users.find(x => x.id === store.user.id)
  if (u) {
    u.name = name.value
    u.email = email.value
    u.pass = pass.value
    u.avatar = avatar.value
  }

  alert('Cập nhật thành công')
}
</script>

<template>
<div class="container mt-4" v-if="store.user">

  <h4 class="mb-3">Thông tin cá nhân</h4>

  <div class="card shadow-sm">
    <div class="card-body">

      <!-- AVATAR -->
      <div class="text-center mb-3">
        <img :src="avatar"
             style="width:120px;height:120px;object-fit:cover"
             class="rounded-circle border">
      </div>

      <div class="mb-3">
        <label class="form-label">Ảnh đại diện</label>
        <input type="file"
               class="form-control"
               @change="onFile">
      </div>

      <!-- NAME -->
      <div class="mb-3">
        <label class="form-label">Họ tên</label>
        <input v-model="name"
               class="form-control">
      </div>

      <!-- EMAIL -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email"
               class="form-control">
      </div>

      <!-- PASS -->
      <div class="mb-3">
        <label class="form-label">Mật khẩu</label>
        <input v-model="pass"
               type="password"
               class="form-control">
      </div>

      <button class="btn btn-primary" @click="save">
        Lưu thay đổi
      </button>

    </div>
  </div>

</div>

<!-- chưa login -->
<div class="container mt-4" v-else>
  <div class="alert alert-warning">
    Bạn chưa đăng nhập
  </div>
</div>
</template>
