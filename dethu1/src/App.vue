<template>
  <div class="container mt-4">
    <div class="row">
      
      <!-- CỘT TRÁI -->
      <div class="col-7">
        <DanhSach 
          :rooms="rooms"
          :selectedId="selectedId"
        />
      </div>

      <!-- CỘT PHẢI -->
      <div class="col-5">
        <router-view 
          :rooms="rooms"
          @datPhong="handleBooking"
        />
      </div>

    </div>

    <div v-if="message" class="alert alert-success mt-3">
      {{ message }}
    </div>
  </div>
</template>

<script>
import rooms from "./data/rooms"
import DanhSach from "./components/DanhSach.vue"

export default {
  components: { DanhSach },

  data() {
    return {
      rooms: rooms,
      message: "",
      selectedId: ""
    }
  },

  methods: {
    handleBooking(id) {
      this.selectedId = id
      this.message = "Đã gửi yêu cầu đặt phòng cho mã số: " + id
    }
  }
}
</script>