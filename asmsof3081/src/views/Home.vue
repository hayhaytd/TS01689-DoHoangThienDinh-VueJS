<template>

<!-- CAROUSEL (GIỮ ẢNH ONLINE) -->
<div class="container mt-4">
  <div class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner rounded">
      <div class="carousel-item active">
        <img src="https://picsum.photos/1200/400?health" class="d-block w-100">
      </div>
      <div class="carousel-item">
        <img src="https://picsum.photos/1200/400?fitness" class="d-block w-100">
      </div>
    </div>
  </div>
</div>

      <!-- MAIN CONTENT -->
<div class="container my-5">
  <div class="row">

    <!-- SIDEBAR -->
    <aside class="col-md-4">
      <div class="card mb-4">
        <div class="card-body text-center">
          <h5 class="fw-bold">Về HealthBlog</h5>
          <p class="small text-muted">
            Chia sẻ kiến thức về sức khỏe, dinh dưỡng và lối sống lành mạnh.
          </p>
        </div>
      </div>

  <!-- CHUYÊN MỤC -->
  <h4 class="text-info fw-bold mb-3">Chuyên mục</h4>

  <div class="list-group shadow-sm mb-4">
    <a href="#"
       class="list-group-item list-group-item-action d-flex justify-content-between align-items-center bg-info text-white">
      Chế độ tập
      <span class="badge bg-primary">12</span>
    </a>

    <a href="#"
       class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      Chế độ dinh dưỡng
      <span class="badge bg-primary">15</span>
    </a>

    <a href="#"
       class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      Cẩm nang cuộc sống
      <span class="badge bg-primary">99</span>
    </a>
  </div>

  <!-- BÀI VIẾT NỔI BẬT -->
  <div class="card shadow-sm">
    <div class="card-header bg-white">
      <h4 class="text-info fw-bold mb-0">Bài viết nổi bật</h4>
    </div>

    <div class="card-body">

      <!-- BÀI 1 -->
      <div class="d-flex gap-2 mb-4">
        <img src="/images/spinach.jpg"
             class="rounded-circle"
             style="width:80px;height:80px;object-fit:cover;">
        <div>
          <h6 class="fw-bold mb-1">Lợi ích khi ăn rau mỗi ngày</h6>
          <p class="small text-secondary mb-0">
            Rau xanh giúp tăng cường thị lực, kiểm soát cân nặng và phòng bệnh.
          </p>
        </div>
      </div>

      <!-- BÀI 2 -->
      <div class="d-flex gap-2 mb-4">
        <img src="/images/orange.jpg"
             class="rounded-circle"
             style="width:80px;height:80px;object-fit:cover;">
        <div>
          <h6 class="fw-bold mb-1">9 tác dụng tuyệt vời của cam</h6>
          <p class="small text-secondary mb-0">
            Cam giàu vitamin C, tăng đề kháng và làm chậm quá trình lão hóa.
          </p>
        </div>
      </div>

      <!-- BÀI 3 -->
      <div class="d-flex gap-2">
        <img src="/images/coconut.jpg"
             class="rounded-circle"
             style="width:80px;height:80px;object-fit:cover;">
        <div>
          <h6 class="fw-bold mb-1">10 công dụng bất ngờ từ dầu dừa</h6>
          <p class="small text-secondary mb-0">
            Dầu dừa giúp dưỡng da, tốt cho tiêu hóa và chăm sóc sức khỏe.
          </p>
        </div>
      </div>

    </div>
  </div>

</aside>


    <!-- BÀI VIẾT -->
    <section class="col-md-8">
      <h4 class="mb-4">Bài viết nổi bật</h4>

      <div class="row g-3">

        <!-- BÀI 1 -->
        <div class="col-md-6">
          <div class="card h-100">
            <img src="/images/post1.jpg" class="card-img-top">
            <div class="card-body">
              <h6 class="fw-bold">Dinh dưỡng khoa học</h6>
              <p class="small text-muted">
                Chế độ ăn cân bằng giúp cơ thể khỏe mạnh và phòng bệnh.
              </p>
              <button class="btn btn-outline-primary btn-sm">Xem</button>
            </div>
          </div>
        </div>

        <!-- BÀI 2 -->
        <div class="col-md-6">
          <div class="card h-100">
            <img src="/images/post2.jpg" class="card-img-top">
            <div class="card-body">
              <h6 class="fw-bold">Tập thể dục mỗi ngày</h6>
              <p class="small text-muted">
                Vận động 30 phút mỗi ngày giúp tăng cường sức đề kháng.
              </p>
              <button class="btn btn-outline-primary btn-sm">Xem</button>
            </div>
          </div>
        </div>

        <!-- BÀI 3 -->
        <div class="col-md-6">
          <div class="card h-100">
            <img src="/images/post3.jpg" class="card-img-top">
            <div class="card-body">
              <h6 class="fw-bold">Giấc ngủ chất lượng</h6>
              <p class="small text-muted">
                Ngủ đủ giấc giúp tinh thần minh mẫn và phục hồi cơ thể.
              </p>
              <button class="btn btn-outline-primary btn-sm">Xem</button>
            </div>
          </div>
        </div>

        <!-- BÀI 4 -->
        <div class="col-md-6">
          <div class="card h-100">
            <img src="/images/post4.jpg" class="card-img-top">
            <div class="card-body">
              <h6 class="fw-bold">Sức khỏe tinh thần</h6>
              <p class="small text-muted">
                Giữ tinh thần tích cực giúp cuộc sống cân bằng hơn.
              </p>
              <button class="btn btn-outline-primary btn-sm">Xem</button>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</div>

</template>
