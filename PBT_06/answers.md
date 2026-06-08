# Câu A1
Kích thước	        < 768px	            768px - 991px	            >= 992px
Số cột	            1 cột	            2 cột	                    4 cột
Box layout	        Mỗi box 1 hàng	    2 box / hàng	            4 box / hàng


Mobile (<768px)

│   Box 1    │

│   Box 2    │

│   Box 3    │

│   Box 4    │
col-12 box chiếm toàn bộ chiều ngang

Tablet (768px - 991px)

│  Box 1   │  Box 2   │

│  Box 3   │  Box 4   │
col-md-6 -> mỗi box chiếm 50%

Desktop (≥992px)

│Box 1 │Box 2 │Box 3 │Box 4 │
col-lg-3 -> mỗi box chiếm 25%.

Câu hỏi thêm:
col-md-6 nghĩa là mỗi box chiếm 50%
Tại sao không cần viết col-sm-12?
Vì col-12 đã áp dụng cho tất cả kích thước mặc định.

# Câu A2
1.
d-none nghĩa là ẩn element (display: none)
d-md-block nghĩa là từ breakpoint md (≥768px) thì hiện lại dạng display: block
Element hiển thị khi nào?
Khi mà kích thước màn hình từ 768px trở lên (tablet)
2.
<div class="mt-3">
Tác dụng thêm khoảng cách phía trên.
<div class="mb-4">
Tác dụng thêm khoảng cách phía dưới.
<div class="ms-2">
Tác dụng margin bên trái (LTR).
<div class="px-4">
Tác dụng padding ngang 2 bên.
<div class="mb-auto">
Tác dung đẩy element theo Flexbox/Grid.
3.
.coitainer
    Width cố định theo breakpoint
    Có max-width
    Tự căn giữa
.container-fluid
    Luôn chiếm 100% width
    Full màn hình ở mọi kích thước
.container-md
    Mobile: full width
    Từ md (≥768px) trở lên: có max-width