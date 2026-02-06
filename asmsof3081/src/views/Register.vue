<script setup>
import { ref } from 'vue'
import { store } from '../store'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const pass = ref('')
const router = useRouter()

function register(){

  if(!name.value || !email.value || !pass.value){
    alert("Nhập đủ thông tin")
    return
  }

  const exist = store.users.find(u => u.email === email.value)
  if(exist){
    alert("Email đã tồn tại")
    return
  }

  const newUser = {
    id: Date.now(),
    name: name.value,
    email: email.value,
    pass: pass.value
  }


  store.users.push(newUser)

  store.user = newUser

  alert("Tạo tài khoản & đăng nhập thành công")

  router.push('/') 
}
</script>

<template>
<div class="container mt-5" style="max-width:400px">
<div class="card shadow">
<div class="card-body">

<h4 class="mb-3">Đăng ký</h4>

<input v-model="name" class="form-control mb-2" placeholder="Họ tên">
<input v-model="email" class="form-control mb-2" placeholder="Email">
<input v-model="pass" type="password" class="form-control mb-3" placeholder="Mật khẩu">

<button @click="register" class="btn btn-success w-100">
Tạo tài khoản
</button>

</div>
</div>
</div>
</template>
