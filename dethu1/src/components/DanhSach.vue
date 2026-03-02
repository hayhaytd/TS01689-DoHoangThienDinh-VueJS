<template>
  <div>
    <h3>Danh sách phòng</h3>

    <input 
      type="text" 
      class="form-control mb-2"
      placeholder="Tìm theo tên..."
      v-model="keyword"
    />


    <select class="form-select mb-3" v-model="filterLocation">
      <option value="">-- Lọc theo địa điểm --</option>
      <option v-for="loc in locations" :key="loc">{{ loc }}</option>
    </select>

    <div class="row">
      <div 
        class="col-6 mb-3"
        v-for="room in filteredRooms"
        :key="room.id"
      >
        <router-link 
          :to="'/room/' + room.id"
          class="text-decoration-none text-dark"
        >
          <div 
            class="card p-2"
            :class="{
              'border-success shadow': room.id === selectedId
            }"
          >
            <h5>{{ room.room_name }}</h5>
            <p>Mã: {{ room.id }}</p>
          </div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["rooms", "selectedId"],

  data() {
    return {
      keyword: "",
      filterLocation: ""
    }
  },

  computed: {
    locations() {
      return [...new Set(this.rooms.map(r => r.location))]
    },

    filteredRooms() {
      return this.rooms.filter(r => {
        return (
          r.room_name.toLowerCase().includes(this.keyword.toLowerCase()) &&
          (this.filterLocation === "" || r.location === this.filterLocation)
        )
      })
    }
  }
}
</script>