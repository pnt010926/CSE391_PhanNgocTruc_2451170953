# Câu A1:
```
Viết chính xác thẻ <meta viewport> chuẩn:
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Giải thích từng thuộc tính:
name="viewport"	là khai báo đang cấu hình viewport cho thiết bị
width=device-width là đặt chiều rộng viewport bằng đúng chiều rộng màn hình thiết bị
initial-scale=1.0 là mức zoom ban đầu = 100%
Nếu thiếu viewport meta:
    iPhone sẽ giả lập trang web như một màn hình desktop (~980px)
    Trình duyệt tự thu nhỏ toàn bộ trang để vừa màn hình điện thoại
    Chữ rất nhỏ
    Layout responsive bị sai
    Media query có thể hoạt động không đúng mong muốn
Sự khác nhau giữa Mobile-First và Desktop-First
Mobile-First:
    Thiết kế cho mobile trước	
    Dùng min-width	
    CSS mặc định = mobile	
    Mở rộng dần lên tablet/desktop
Desktop-First
	Thiết kế cho desktop trước
	Dùng max-width
	CSS mặc định = desktop
    Thu nhỏ dần xuống mobile
Ví dụ Mobile-First (breakpoint 768px)
.container{
    width: 100%;

    padding: 10px;

    font-size: 14px;
}

Ví dụ Desktop-First
.container{
    width: 1200px;

    margin: auto;

    padding: 40px;

    font-size: 18px;
}
Vì sao Mobile-First được khuyên dùng?
    Người dùng điện thoại hiện nay nhiều hơn desktop
    Hiệu năng tốt hơn cho mobile
    CSS dễ mở rộng hơn
    Code sạch hơn
    Google ưu tiên Mobile-First Indexing cho SEO
```
# Câu A2
Breakpoint	            Kích thước	        Thiết bị đại diện	        Ví dụ lưới sản phẩm
Extra Small(XS)	        < 576px	            Điện thoại nhỏ	            1 cột
Small(SM)	            >= 576px	        Điện thoại lớn	            2 cột
Medium(MD)	            >= 768px	        Tablet	                    2–3 cột
Large (LG)	            >= 992px	        Laptop	                    3–4 cột
Extra Large (XL)	    >= 1200px	        Desktop                     lớn	4 cột
Extra Extra Large (XXL)	>= 1400px	        Màn hình rất lớn	        5–6 cột

# Câu A3
Chiều rộng màn hình	        .container width
375px (iPhone SE)	        100%
600px	                    540px
800px	                    720px
1000px	                    960px
1400px	                    1140px
# Câu A4
```
1. Variables ($primary-color)
Variables dùng để lưu giá trị và tái sử dụng nhiều lần.
Ví dụ SCSS:
$primary-color: #2563eb;
$text-color: white;

button{
    background: $primary-color;
    color: $text-color;
}
2. Nesting (CSS lồng nhau)
SCSS cho phép viết selector lồng nhau giống cấu trúc HTML.
Ví dụ SCSS
.navbar{
    background: #1e293b;
    ul{
        display: flex;
    }
    li{
        list-style: none;
    }
    a{
        color: white;
        &:hover{
            color: skyblue;
        }
    }
}
3. Mixins (@mixin, @include)
Mixin giống như hàm trong lập trình.
Dùng để tái sử dụng nhiều đoạn CSS.
Ví dụ SCSS
@mixin flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero{
    @include flex-center;

    height: 100vh;
}
4. @extend / Inheritance
Cho phép một class kế thừa CSS của class khác.
Ví dụ SCSS
.button{
    padding: 10px 20px;
    border-radius: 6px;
    border: none;
}

.primary-btn{
    @extend .button;
    background: blue;
    color: white;
}
Tại sao trình duyệt KHÔNG đọc được .scss?
Vì .scss là ngôn ngữ mở rộng của CSS, không phải CSS thuần nên browser không thể chạy trực tiếp file .scss.
Để chuyển scss sang css ta cần phải biên dịch lại chúng.
```
# Câu B3

```bash
sass scss/style.scss css/style.css
```
# Câu C1
**375px**
Navigation thay đổi thế nào?
    Navigation menu ngang bị ẩn
    Hiện icon hamburger ☰
    Giúp tiết kiệm không gian màn hình nhỏ
Lưới content thay đổi mấy cột?
    Product grid còn 1 cột
Elements nào bị ẩn trên mobile?
    Sidebar filter bị ẩn
    Ads bar bị ẩn
    Navigation menu ngang bị ẩn
Font size có thay đổi không?
    Font size nhỏ nhất
    Phù hợp màn hình điện thoại
**768px**
Navigation thay đổi thế nào?
    Hamburger bị ẩn
    Navigation menu ngang xuất hiện
Lưới content thay đổi mấy cột?
    Product grid chuyển thành 2 cột
Elements nào bị ẩn?
    Sidebar xuất hiện lại
    Ads bar vẫn ẩn
Font size có thay đổi không?
    Font lớn hơn mobile
**1200px**
Navigation thay đổi thế nào?
    Navigation hiển thị đầy đủ dạng ngang
    Hamburger không còn xuất hiện
Lưới content thay đổi mấy cột?
    Product grid thành 4 cột
Elements nào hiển thị thêm?
    Sidebar xuất hiện bên trái
    Ads bar xuất hiện bên phải
    Layout đầy đủ 3 cột
Font size có thay đổi không?
    Font lớn nhất
    Khoảng cách và padding lớn hơn
    Card title khoảng 22px