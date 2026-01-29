<template>
  <div class="card p-3">
    <h4 class="mb-3">Danh sách sản phẩm</h4>

    <div
      v-for="(item, index) in products"
      :key="index"
      class="border rounded p-3 mb-3"
      :class="{ 'bg-light': index % 2 === 0 }"
    >
      <h5 class="text-primary">{{ item.name }}</h5>
      <p class="mb-1">{{ item.description }}</p>
      <strong class="text-danger">
        {{ item.price.toLocaleString() }} VNĐ
      </strong>
    </div>
  </div>
</template>

<script setup>
// nhan props tu CHA
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>
