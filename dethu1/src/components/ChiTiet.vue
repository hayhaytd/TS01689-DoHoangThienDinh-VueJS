<template>
  <div v-if="room">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="card-title">{{ room.room_name }}</h4>
        <p><strong>Mã:</strong> {{ room.id }}</p>
        <p><strong>Loại:</strong> {{ room.type }}</p>
        <p><strong>Địa chỉ:</strong> {{ room.location }}</p>
        <p><strong>Tiện nghi:</strong> {{ room.desc }}</p>
        <p><strong>Giá:</strong> {{ room.price }} USD</p>

        <button 
          class="btn btn-primary mt-2"
          @click="datPhong"
        >
          Đặt phòng
        </button>
      </div>
    </div>
  </div>

  <div v-else class="alert alert-warning">
    Vui lòng chọn phòng
  </div>
</template>

<script>
export default {
  props: ["rooms"],

  computed: {
    room() {
      return this.rooms.find(
        r => r.id === this.$route.params.id
      )
    }
  },

  methods: {
    datPhong() {
      this.$emit("datPhong", this.room.id)
    }
  }
}
</script>