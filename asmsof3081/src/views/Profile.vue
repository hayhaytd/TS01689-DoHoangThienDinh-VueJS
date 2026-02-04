<template>
<div class="container mt-4">
<h4>Thông tin cá nhân</h4>

<div class="card p-3">
Tên: {{ store.user.name }}
</div>

</div>
</template>

<script setup>
import { store } from '../store'
</script>
