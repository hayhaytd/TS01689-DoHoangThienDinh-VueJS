<template>
  <div class="card mt-4">
    <div class="card-body">
      <h5 class="mb-3">Bình luận</h5>

      <!-- FORM COMMENT -->
      <form @submit.prevent="submitComment">
        <div class="mb-3">
          <textarea
            class="form-control"
            rows="3"
            v-model="commentText"
            placeholder="Nhập bình luận..."
          ></textarea>
        </div>

        <button class="btn btn-primary btn-sm">
          Gửi bình luận
        </button>
      </form>

      <!-- LIST COMMENT -->
      <ul class="list-group mt-3" v-if="comments.length">
        <li
          class="list-group-item"
          v-for="(c, index) in comments"
          :key="index"
        >
          <strong>{{ username }}</strong>: {{ c }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* nhận username từ cha */
const props = defineProps({
  username: {
    type: String,
    default: 'Guest'
  }
})

const commentText = ref('')
const comments = ref([])

function submitComment() {
  if (!commentText.value.trim()) return

  comments.value.push(commentText.value.trim())
  commentText.value = ''
}
</script>
