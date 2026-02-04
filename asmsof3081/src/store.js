import { reactive } from 'vue'

export const store = reactive({

  user: {
    id: 1,
    name: 'Demo User'
  },

  posts: [
    {
      id: 1,
      title: 'Lợi ích tập thể dục',
      content: 'Tập thể dục mỗi ngày giúp tăng sức khỏe.',
      author: 'Demo User',
      date: '2026-01-01'
    }
  ],

  comments: [
    {
      id: 1,
      postId: 1,
      author: 'Guest',
      content: 'Bài viết rất hay!'
    }
  ]

})
