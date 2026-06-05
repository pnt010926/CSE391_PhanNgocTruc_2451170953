# Câu A1  Dưới đây là 10 input types phổ biến trong HTML5 kèm theo đặc điểm và ứng dụng thực tế trong lĩnh vực Thương mại điện tử (E-commerce):
1. Type="email" → Ô nhập text → Tự kiểm tra có định dạng email chứa @ và domain → Dùng cho form đăng ký tài khoản hoặc nhận hóa đơn điện tử trong trang E-Commerce.
2. Type="password" → Ô nhập ký tự bị che bằng dấu • hoặc * → Không có validation đặc biệt mặc định → Dùng cho form đăng nhập tài khoản khách hàng.
3. Type="number" → Ô nhập số có nút tăng/giảm → Chỉ cho nhập số, có thể kết hợp min, max → Dùng để nhập số lượng sản phẩm cần mua.
4. Type="tel" → Ô nhập số điện thoại → Không kiểm tra tự động mạnh nhưng hỗ trợ bàn phím số trên mobile → Dùng để nhập số điện thoại giao hàng.
5. Type="date" → Bộ chọn ngày dạng calendar → Kiểm tra đúng định dạng ngày → Dùng để chọn ngày nhận hàng hoặc ngày sinh khách hàng.
6. Type="time" → Bộ chọn giờ/phút → Kiểm tra đúng định dạng thời gian → Dùng để chọn khung giờ giao hàng.
7. Type="url" → Ô nhập liên kết website → Tự kiểm tra định dạng URL (http://, https://) → Dùng cho người bán nhập link website cửa hàng hoặc sản phẩm.
8. Type="search" → Ô tìm kiếm có biểu tượng/xóa nhanh → Không validation đặc biệt → Dùng cho thanh tìm kiếm sản phẩm trên website bán hàng.
9. Type="file" → Nút chọn file từ máy tính → Có thể giới hạn loại file bằng accept → Dùng để khách hàng upload ảnh đánh giá sản phẩm hoặc ảnh chuyển khoản.
10. Type="checkbox" → Ô vuông tích chọn nhiều mục → Không validation mặc định → Dùng để chọn đồng ý điều khoản, chọn nhiều sở thích hoặc nhiều sản phẩm.

# Câu A2
Dự đoán:
Trường hợp 1: Sẽ lỗi do khoảng trống mình không nhập gì
Trường hợp 2: Lỗi do đây là kiểu email phải có @
Trường hợp 3: Lỗi do giá trị cao nhât nhận được là 10
Trường hợp 4: Lỗi vì chỉ nhận số 
Trường hợp 5: Ký tự ít nhất từ 8 số nên lỗi
Thực tế:
Khi chạy nó hiển thị ra toàn bộ những thứ mà user đã nhập
# Câu A3
1. Tại sao <label for="email"> quan trọng cho người dùng screen reader?
Tại vì nó sẽ giúp screen reader biết rõ đây là ô nhập email
2. Khi nào dùng <fieldset> + <legend>? Cho ví dụ cụ thể
<fieldset> dùng để nhóm các trường nhập liệu có liên quan với nhau, còn <legend> dùng để đặt tiêu đề cho nhóm đó. Chúng giúp người dùng và Screen Reader hiểu rằng các trường này thuộc cùng một chủ đề. 
ví dụ khi tạo 1 form biểu mẫu dùng fieldset với legend sẽ giúp cho screenreader hiểu rõ hơn
3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có <label>?
Aria-label được dùng khi phần tử không có văn bản mô tả hiển thị trên màn hình nhưng vẫn cần screenreader hiểu được chức năng của nó.
Khi đã có <label> thì thông tin đã được hiển thị để đủ hiểu mà khi thêm aria-label nó sẽ gây thừa thông tin gây mâu thuẫn.
# Câu A4
1:
Loading="lazy" cho phép trình duyệt trì hoãn việc tải ảnh cho đến khi ảnh sắp xuất hiện trong vùng nhìn thấy (viewport) của người dùng.
**Lợi ích**
Nó sẽ giúp cải thiện tốc độ duyệt web thay vì tải hàng loạt ảnh nó sẽ tải những ảnh mà user đã cuộn đến
**Không nên dùng khi nào?**
Ảnh banner vì khi mở ra đấy là sẽ ấn tượng đầu tiên với trang web
Ảnh logo
Ảnh quan trọng.
2:
Các trình duyệt hỗ trợ codec khác nhau, không phải lúc nào cũng hỗ trợ cùng một định dạng.
3 format video web phổ biến là: .mp4, .webm, .ogv,..
3:
Thuộc tính alt sẽ hiển thị khi ảnh lỗi và ta có thể biết được đấy là sản phẩm gì
Google sẽ dùng alt để hiểu nội dung ảnh.
Alt cho 3 trường hợp:
    1. Ảnh sản phẩm iPhone 16
    alt="iPhone 16 Pro Max màu Titan đen nhìn từ mặt trước và mặt sau"
    2. Ảnh trang trí (decorative)
    alt="" Vì ảnh không mang thông tin.
    3. Ảnh biểu đồ doanh thu Q1/2026
    alt="Biểu đồ doanh thu Q1/2026"

# Câu A5
Chỉ dùng <img>
<img src="product.jpg" alt="iPhone">
Ý nghĩa
Chỉ hiển thị ảnh.
Không có chú thích đi kèm.
Phù hợp khi:
Ảnh chỉ để minh họa hoặc Thông tin đã có ở văn bản xung quanh
Cách 2: Dùng <figure> + <figcaption>
<figure>
    <img src="product.jpg"
         alt="iPhone 16 Pro Max 256GB Titan">

    <figcaption>
        iPhone 16 Pro Max — 25.990.000đ
    </figcaption>
</figure>
Ý nghĩa
Ảnh và chú thích tạo thành một khối nội dung hoàn chỉnh.
<figcaption> mô tả hoặc giải thích cho ảnh.
Dùng cách 1 khi ảnh chỉ mang tính minh họa hoặc giải trí
Ví dụ: <img src="logo.png" alt="Logo công ty">
Dùng cách 2 khi ảnh cần có mô tả, tiêu đề hoặc chú thích đi kèm
ví dụ: 
<figure>
    <img
        src="iphone16.jpg"
        alt="iPhone 16 Pro Max Titan">
    <figcaption>
        iPhone 16 Pro Max — 25.990.000đ
    </figcaption>
</figure>

# Câu C1
Lỗi 1: Dòng 2 — Input "Tên" không có <label for=""> vi phạm accessibility
Sửa:
<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>
Lỗi 2: Dòng 2 — Input "Tên" không có thuộc tính name Vi phạm: Best Practices
Sửa:
<input type="text" id="name" name="name">
Lỗi 3: Dòng 4 — Input Email không có <label for=""> Vi phạm: Accessibility
Sửa:
<label for="email">Email:</label>
<input type="email" id="email" name="email">
Lỗi 4: Dòng 6 — Input Password không có <label for=""> Vi phạm: Accessibility
Sửa:
<label for="password">Mật khẩu:</label>
<input type="password" id="password" name="password">
Lỗi 5: Dòng 7 — Input Confirm Password không có <label for=""> Vi phạm: Accessibility
Sửa:
<label for="confirmPassword">Nhập lại mật khẩu:</label>
<input type="password" id="confirmPassword" name="confirmPassword">
Lỗi 6: Dòng 6-7 — Password không có validation tối thiểu
Vi phạm: Validation
Sửa:
<input
    type="password"
    id="password"
    name="password"
    minlength="8"
    required>
Lỗi 7: Dòng 9 — Phone dùng type="text" thay vì type="tel" Vi phạm: Best Practices
Sửa:
<label for="phone">Phone:</label>
<input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{10}">
Lỗi 8: Dòng 11 — Select không có <label for=""> Vi phạm: Accessibility
Sửa:
<label for="city">Thành phố:</label>
<select id="city" name="city">
    <option>Hà Nội</option>
    <option>TP.HCM</option>
</select>

# Câu C2
1. Pattern Regex cho CMND/CCCD và Số tài khoản
CMND/CCCD (đúng 12 chữ số)
pattern="[0-9]{12}"
Số tài khoản (10-15 chữ số)
pattern="[0-9]{10,15}"
2. HTML5 Validation có đủ an toàn cho ứng dụng ngân hàng không?
Không. HTML5 Validation chỉ giúp kiểm tra dữ liệu phía trình duyệt (Client-side Validation), giúp cải thiện trải nghiệm người dùng nhưng không đảm bảo an toàn bảo mật.
3. Ba loại Validation HTML5 KHÔNG THỂ làm được
Loại đầu tiên: So sánh hai trường dữ liệu
ví dụ như kiểm tra mật khẩu HTML không thể kiểm tra:
Password === Confirm Password nên cần dùng javascript
Loại 2: Kiểm tra dữ liệu đã tồn tại hay chưa
HTML không thể truy vấn cơ sở dữ liệu, nên phải dùng JavaScript + Backend.
Loại 3: Kiểm tra logic nghiệp vụ
ví dụ khi yêu cầu là người dùng phải trên 18 tuổi mà dữ liệu có là ngày tháng năm sinh của người dùng thì HTML không thể tự tính tuổi hiện tại và so sánh. HTML không thể tự tính tuổi hiện tại và so sánh. Phải dùng JavaScript hoặc Backend.
4. Hai rủi ro bảo mật nếu chỉ validate Frontend
Rủi ro 1: Dữ liệu giả mạo (Bypass Validation)
Kẻ tấn công có thể bỏ qua:
required
pattern
minlength
maxlength
và gửi:
CMND = ABCXYZ
Số tài khoản = HACK123
thẳng đến server.
Rủi ro 2: Tấn công Injection
Ví dụ ô tên người dùng: <script>alert('hack')</script>
Nếu Backend không kiểm tra:
XSS
SQL Injection
có thể xảy ra.