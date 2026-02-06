import { reactive } from 'vue'

export const store = reactive({

  user: null,

  users: [
    {
      id: 1,
      name: 'Đỗ Hoàng Thiên Định',
      email: "admin@gmail.com",
      pass: "123",
      avatar: '/images/avatar1ne.png'
    },
    {
      id: 2,
      name: "Kim Nhật Anh",
      email: "nhatanh@gmail.com",
      pass: "123",
      avatar: '/images/avatar2ne.png'
    }
  ],

  posts: [

    {
      id: 1,
      title: 'Lợi ích tập thể dục',
      content: 'Tập thể dục mỗi ngày mang lại rất nhiều lợi ích cho sức khỏe cả về thể chất lẫn tinh thần. Việc vận động đều đặn giúp tăng cường hệ tim mạch, cải thiện tuần hoàn máu và hỗ trợ kiểm soát cân nặng hiệu quả. Ngoài ra, tập luyện còn giúp cơ bắp săn chắc hơn, xương khớp linh hoạt và giảm nguy cơ mắc các bệnh mãn tính. Không chỉ dừng lại ở đó, hoạt động thể chất còn giúp giảm căng thẳng, cải thiện tâm trạng và nâng cao chất lượng giấc ngủ. Chỉ cần dành từ 20–30 phút mỗi ngày cho việc đi bộ, chạy bộ hoặc tập các bài tập nhẹ, bạn đã có thể tạo ra sự thay đổi tích cực rõ rệt cho cơ thể. Quan trọng nhất là duy trì thói quen đều đặn và lựa chọn hình thức vận động phù hợp với thể trạng của mình.',
      author: 'Đỗ Hoàng Thiên Định',
      date: '01/01/2026',
      image: '/images/post2.jpg',
      comments: [
        {
          author: 'Kim Nhật Anh',
          content: 'Mình đang tập mỗi sáng, thấy người khỏe hẳn',
          time: '01/01/2026 08:30'
        },
        {
          author: 'Trần Bảo Thịnh',
          content: 'Bài viết rõ ràng, dễ áp dụng',
          time: '01/01/2026 09:10'
        }
      ]
    },

    {
      id: 2,
      title: 'Chế độ ăn uống lành mạnh',
      content: 'Ăn nhiều rau củ và trái cây mỗi ngày giúp cơ thể được cung cấp đầy đủ vitamin, khoáng chất và chất xơ cần thiết. Một chế độ ăn cân bằng không chỉ giúp tăng cường hệ miễn dịch mà còn hỗ trợ tiêu hóa tốt hơn và giảm nguy cơ mắc các bệnh tim mạch. Việc hạn chế thực phẩm chế biến sẵn, đồ chiên nhiều dầu mỡ và nước ngọt có gas cũng góp phần cải thiện sức khỏe lâu dài. Bạn nên xây dựng thói quen ăn đa dạng thực phẩm, bổ sung đủ nước và kiểm soát khẩu phần hợp lý. Chỉ cần thay đổi nhỏ trong bữa ăn hàng ngày cũng có thể tạo nên sự khác biệt lớn cho thể trạng và mức năng lượng của cơ thể.',
      author: 'Kim Nhật Anh',
      date: '02/01/2026',
      image: '/images/post1.jpg',
      comments: [
        {
          author: 'Ngô Phước Thịnh',
          content: 'Mình đang giảm đồ chiên dầu, thấy hiệu quả thật.',
          time: '02/01/2026 10:05'
        },
        {
          author: 'Nguyễn Thành Minh',
          content: 'Nên thêm thực đơn mẫu thì hay hơn.',
          time: '02/01/2026 10:40'
        }
      ]
    },

    {
      id: 3,
      title: 'Giấc ngủ chất lượng',
      content: 'Ngủ đủ giấc đóng vai trò rất quan trọng trong việc phục hồi năng lượng và duy trì hoạt động ổn định của cơ thể. Khi ngủ sâu và đủ thời gian, não bộ được nghỉ ngơi, hệ miễn dịch được củng cố và trí nhớ được cải thiện rõ rệt. Thiếu ngủ kéo dài có thể gây mệt mỏi, giảm khả năng tập trung và ảnh hưởng tiêu cực đến cảm xúc. Để có giấc ngủ chất lượng, bạn nên duy trì giờ ngủ cố định, hạn chế dùng thiết bị điện tử trước khi ngủ và tránh sử dụng chất kích thích vào buổi tối. Một giấc ngủ tốt sẽ giúp bạn làm việc hiệu quả hơn và giữ tinh thần tỉnh táo suốt ngày dài.',
      author: 'Đỗ Hoàng Thiên Định',
      date: '03/01/2026',
      image: '/images/post3.jpg',
      comments: [
        {
          author: 'Trần Thanh Tùng',
          content: 'Từ khi ngủ trước 11h thấy tỉnh táo hơn.',
          time: '03/01/2026 07:50'
        },
        {
          author: 'Vũ Đình Minh Nghĩa',
          content: 'Khó ngủ thì nên làm gì admin?',
          time: '03/01/2026 08:20'
        }
      ]
    },

    {
      id: 4,
      title: 'Sức khỏe tinh thần',
      content: 'Giữ tinh thần tích cực là yếu tố quan trọng giúp cuộc sống cân bằng và bền vững hơn. Khi tâm trạng ổn định, bạn sẽ xử lý áp lực tốt hơn, đưa ra quyết định sáng suốt hơn và duy trì các mối quan hệ lành mạnh. Những thói quen như tập thể dục, thiền, đọc sách hoặc dành thời gian cho sở thích cá nhân có thể giúp giảm căng thẳng đáng kể. Ngoài ra, việc chia sẻ cảm xúc với người thân và bạn bè cũng giúp giải tỏa áp lực tâm lý. Chăm sóc sức khỏe tinh thần không phải là điều xa xỉ, mà là một phần thiết yếu để duy trì chất lượng sống lâu dài.',
      author: 'Đỗ Hoàng Thiên Định',
      date: '04/01/2026',
      image: '/images/post4.jpg',
      comments: [
        {
          author: 'Nguyễn Tuấn Huy',
          content: 'Thiền mỗi ngày giúp mình đỡ căng thẳng.',
          time: '04/01/2026 09:15'
        },
        {
          author: 'Võ Hoàng Minh Khôi',
          content: 'Chủ đề này rất cần thiết.',
          time: '04/01/2026 09:45'
        }
      ]
    }

  ]

})
