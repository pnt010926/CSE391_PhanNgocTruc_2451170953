# Câu A1 http & browser

## Các bước xảy ra khi bạn gõ https://shopee.vn và ấn Enter trên trình duyệt
> *Phần 1*
1. Bạn gõ https://shopee.vn vào trình duyệt web
2. DNS sẽ giúp dịch tên website bạn vừa nhập thành địa chỉ ip.
3. Máy của bạn sẽ gửi yêu cầu đến Ip mà DNS vừa dịch cho bạn(server của shopee)
4. Shopee sẽ trả về dữ liệu của trang web shopee
5. Trình duyệt giúp đọc lại các file này và trình ra giao diện để mọi người thao tác

>*Phần 2*

  *Trong tab Network của Google Chrome DevTools, bạn có thể theo dõi toàn bộ các request/response giữa trình duyệt và server khi tải hoặc tương tác với một trang web.*
  

  # Câu A2 
    *Lỗi 1: 
        Dùng <div class="header"> thay vì <header>

    Sai:

        <div class="header">

    Sửa:

        <header>

    Vì: header giúp máy tìm kiếm nhận biết đây là phần đầu trang.*
    *Lỗi 2:
        Menu không dùng thẻ <nav>

        Menu hiện tại:

            <div class="menu">
            <div><a href="/">Trang chủ</a></div>
            <div><a href="/products">Sản phẩm</a></div>
        </div>

        Không rõ đây là điều hướng. 
        Sửa lại:
            <nav>
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/products">Sản phẩm</a></li>
                </ul>
            </nav>*
        *Lỗi 3: 
            Ảnh thiếu thuộc tính alt
            Sai:
                <img src="iphone.jpg">

            Sửa:
                <img src="iphone.jpg" alt="iPhone 16 Pro">

            Lý do: Google đọc alt để hiểu ảnh.*
        *Lỗi 4:
            Footer dùng div thay vì <footer>
                Sai:
                    <div class="footer">
                Sửa:
                    <footer>
# Câu A3

