<script setup>
import { ref } from 'vue'
import { store } from '../store'
import { useRouter } from 'vue-router'

const email = ref('')
const pass = ref('')
const router = useRouter()

function login(){

  const u = store.users.find(
    x => x.email === email.value && x.pass === pass.value
  )

  if(!u){
    alert("Sai tài khoản")
    return
  }

  store.user = u
  router.push('/')
}
</script>

<template>
<div class="container mt-5" style="max-width:400px">
<div class="card">
<div class="card-body">

<h4>Đăng nhập</h4>

<input v-model="email" class="form-control mb-2" placeholder="Email">
<input v-model="pass" type="password" class="form-control mb-2" placeholder="Mật khẩu">

<button @click="login" class="btn btn-primary w-100">
Đăng nhập
</button>

</div>
</div>
</div>
</template>
