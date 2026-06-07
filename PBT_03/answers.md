# Câu A1: Liệt kê 3 cách nhúng CSS vào HTML (inline, internal, external). Mỗi cách:

Viết 1 ví dụ code
Ưu điểm và nhược điểm
Khi nào nên dùng
Có 3 cách nhúng Css vào html là:
+ Inline Css
+ internal Css
+ External Css
**Inline Css:**
Ví dụ:
```
<p style="color: red; font-size: 20px;">
    Xin chào!
</p>
Ưu điểm:
    Nhanh, đơn giản.
    Chỉ áp dụng cho một phần tử cụ thể.
Nhược điểm:
    Khó quản lý khi trang web lớn.
    không tái sử dụng, khó maintain.
Dùng khi:
    Chỉ muốn thay đổi kiểu của một phần tử duy nhất.
    Kiểm tra nhanh giao diện.
    CSS được tạo động bằng JavaScript.

**Internal Css:**
Ví dụ:

<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>Xin chào!</p>
</body>
</html>
Ưu điểm:
    Dễ quản lý hơn Inline CSS.
    Áp dụng cho toàn bộ trang web hiện tại.
Nhược điểm:
    Không thể tái sử dụng cho nhiều trang.
Dùng khi:
    Website chỉ có một trang HTML hoặc một trang đặc biệt.
    Muốn gom toàn bộ CSS của trang vào một chỗ.
    Làm bài tập, thực hành hoặc demo nhỏ.
**External Css:**
Ví dụ:
file css
p {
    color: green;
    font-size: 20px;
}
file html phải nối với css bằng lệnh:

<head>
    <link rel="stylesheet" href="style.css">
</head>
Ưu điểm:
    Dễ quản lý và bảo trì.
    Tái sử dụng cho nhiều trang web.
    Là cách được sử dụng phổ biến nhất trong các dự án thực tế.
Nhược điểm:
        Cần tạo thêm file CSS riêng.
Dùng khi:
    Xây dựng website thực tế.
    Có nhiều trang HTML cần dùng chung CSS.
    Muốn dễ bảo trì, chỉnh sửa và tái sử dụng mã nguồn.
```
# Câu A2:
```
1. h1
Chọn tất cả thẻ <h1>.
→ Chọn: "ShopTLU"
2. .price
Chọn tất cả phần tử có class price.
→ Chọn:
"25.990.000đ"
"45.990.000đ"
3. #app header
Chọn thẻ <header> nằm bên trong phần tử có id app.
→ Chọn toàn bộ thẻ:
<header class="top-bar dark">
    <h1>ShopTLU</h1>
    <nav>
        <a href="/" class="active">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
    </nav>
</header>
Text content:
→ "ShopTLU Home Products About"
4. nav a:first-child
Chọn thẻ <a> đầu tiên bên trong <nav>.
<a href="/" class="active">Home</a>
→ Chọn: "Home"
5. .product.featured h2
Chọn thẻ <h2> nằm trong phần tử có đồng thời class product và featured.
<article class="product featured">
    <h2>MacBook Pro</h2>
</article>
→ Chọn: "MacBook Pro"
6. article > p
Chọn tất cả thẻ <p> là con trực tiếp của <article>.
Trong article thứ nhất:
<p class="price">25.990.000đ</p>
<p>Mô tả sản phẩm...</p>
Trong article thứ hai:
<p class="price">45.990.000đ</p>
<p>Mô tả sản phẩm...</p>
→ Chọn:
"25.990.000đ"
"Mô tả sản phẩm..."
"45.990.000đ"
"Mô tả sản phẩm..."
7. a[href="/"]
Chọn thẻ <a> có thuộc tính href="/".
<a href="/" class="active">Home</a>
→ Chọn: "Home"
8. .top-bar.dark h1
Chọn thẻ <h1> nằm trong phần tử có đồng thời class top-bar và dark.
<header class="top-bar dark">
    <h1>ShopTLU</h1>
</header>
→ Chọn: "ShopTLU"
```
# Câu A3:
Trường hợp 1:
Trong content-box:
width = 400px chỉ tính phần content
Padding và border được cộng thêm vào chiều rộng
Chiều rộng hiển thị
400+20×2+5×2=450px
-> Chiều rộng hiển thị = 450px

Không gian chiếm trên trang

Cộng thêm margin trái và phải:

450+10×2=470px

-> Không gian chiếm trên trang = 470px
Trường hợp 2:
Trong border-box:
width = 400px đã bao gồm:
+ Content
+ Padding
+ Border
-> Chiều rộng hiển thị = 400px
Kích thước content thực tế
400−(20×2)−(5×2)
400−40−10=350px
-> Content thực tế = 350px
Không gian chiếm trên trang
400+10×2
400+20=420px
-> Không gian chiếm trên trang = 420px
Trường hợp 3:
Với các block element xếp dọc nhau, margin dọc sẽ collapse.
Browser chỉ lấy margin lớn hơn:
max(25,40)=40px
-> Khoảng cách giữa box-a và box-b = 40px
Tại sao không phải 65px?
Do cơ chế Margin Collapse của CSS:
Margin dưới của phần tử trên,Margin trên của phần tử dưới không cộng lại mà gộp thành một margin duy nhất bằng giá trị lớn nhất.

Nâng cao:
Khi một margin âm và một margin dương:
40+(−10)
=30px
→ Khoảng cách = 30px

# Câu A4  
1. Tính Specificity Score (a, b, c)
Rule A (p): (0, 0, 1) — Chỉ có 1 thẻ HTML (Element).
Rule B (.price): (0, 1, 0) — Chỉ có 1 Class.
Rule C (#main-price): (1, 0, 0) — Chỉ có 1 ID.
Rule D (p.price): (0, 1, 1) — Gồm 1 thẻ HTML và 1 Class.

Màu cuối cùng của element là red. 
Vì rule C có specificity cao nhất (ID selector) nên được chọn.

Nếu thêm style="color: orange;" lên element:
Inline style có priority lớn hơn rule stylesheet thông thường.
Nên màu sẽ là orange.

Nếu Rule A thêm !important:
p { color: black !important; } Màu sẽ là black.
Vì !important ưu tiên vượt trên tất cả, bất kể specificity thấp hơn.

# Câu B2.1
Hộp 1 (content-box): chiều rộng thực tế = 300 + 20×2 + 5×2 = 350px
Hộp 2 (border-box): chiều rộng thực tế = 300 - 20×2 - 5×2 = 250px
Hai hộp đều có:
width: 300px;
padding: 20px;
border: 5px solid black;
Khác nhau ở thuộc tính box-sizing.
Box 1 thuộc tính là content-box: width chỉ tính phần nội dung, nên padding và border làm hộp lớn hơn kích thước khai báo.
Box 2 thuộc tính là border-box: width đã bao gồm content, padding và border, nên kích thước hộp luôn đúng bằng giá trị khai báo.

# Câu B3

Kết quả:
Element hiển thị màu gold vì Rule 10 có specificity cao nhất (1,2,1).

Nếu thay đổi thứ tự các rule:
- Kết quả không đổi vì Rule 10 vẫn có specificity cao nhất.
- Chỉ khi hai rule có cùng specificity thì rule viết sau sẽ được ưu tiên.