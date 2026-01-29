<template>
  <div class="card p-3 mb-4">
    <h4 class="mb-3">Nhập sản phẩm phần cứng</h4>

    <input
      v-model="name"
      class="form-control mb-2"
      placeholder="Tên sản phẩm"
    />

    <textarea
      v-model="description"
      class="form-control mb-2"
      placeholder="Mô tả sản phẩm"
    ></textarea>

    <input
      v-model.number="price"
      type="number"
      class="form-control mb-3"
      placeholder="Giá (VNĐ)"
    />

    <button class="btn btn-primary" @click="submitProduct">
      Thêm sản phẩm
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// khai bao emit
const emit = defineEmits(['add-product'])

const name = ref('')
const description = ref('')
const price = ref(0)

function submitProduct() {
  if (name.value && description.value && price.value > 0) {
    const newProduct = {
      name: name.value,
      description: description.value,
      price: price.value
    }

    // gui du lieu len component CHA
    emit('add-product', newProduct)

    // reset form
    name.value = ''
    description.value = ''
    price.value = 0
  }
}
</script>
