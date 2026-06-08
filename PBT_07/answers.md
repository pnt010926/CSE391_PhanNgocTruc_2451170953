# Câu A1 
Dự đoán
Đoạn 1: in ra 5;
Đoạn 2: in ra 10;
Đoạn 3: in ra 20;
Đoạn 4: in ra dãy 1,2,3,4;
Đoạn 5: Ngoài block 1, trong block 2;
Đáp án
Đoạn 1: Biến tồn tại nhưng chưa có giá trị nên là: undefined.
Đoạn 2: Không được truy cập trước khi khai báo nên giá trị ReferenceError.
Đoạn 3: Const không cho phép gán lại giá trị nên giá trị báo lỗi TypeError.
Đoạn 4: đúng vì const không cho đổi reference nhưng vẫn được phép sửa nội dung object/array.
Đoạn 5: đúng vì let có block scope, biến a bên trong block là biến khác hoàn toàn với bên ngoài.

# Câu A2
Dự đoán:
console.log(typeof null);            "object";
console.log(typeof undefined);       "undefined";
console.log(typeof NaN);             "number"
console.log("5" + 3);                53
console.log("5" - 3);                2
console.log("5" * "3");              15
console.log(true + true);            2
console.log([] + []);                ""
console.log([] + {});                "[object Object]"
console.log({} + []);                0

"5" + 3 "+" hỗ trợ nối chuỗi nên kết quả ra được là 53
"5" - 3 là phép toán thường nên kết quả là 2.

# Câu A3
console.log(5 == "5");                true
console.log(5 === "5");               flase
console.log(null == undefined);       true 
console.log(null === undefined);      flase
console.log(NaN == NaN);              flase
console.log(0 == false);              true
console.log(0 === false);             flase
console.log("" == false);             true

Ta nên dùng "==" khi nào muốn gắn giá trị 
Còn "===" dùng để kiểm tra 2 giá trị đấy bằng nhau không

# Câu A4 
Trong js có tất cả là 8 flashy
    flase
    0
    -0
    0n
    ""
    null
    undefined
    NaN
Dự đoán
if ("0") console.log("A");           In 
if ("") console.log("B");            Không
if ([]) console.log("C");            In
if ({}) console.log("D");            In
if (null) console.log("E");          Không
if (0) console.log("F");             Không
if (-1) console.log("G");            In
if (" ") console.log("H");           In

# Câu A5
```
Cách 1
Code cũ
    var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
Template Literal
    var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
Cách 2
Code cũ
    var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
Template Literal
    var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
Cách 3
Code cũ
    var html = "<div class=\"card\">" +
        "<h2>" + title + "</h2>" +
        "<p>" + description + "</p>" +
        "<span>Giá: " + price + "đ</span>" +
        "</div>";
Template Literal
    var html = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
    </div>
    `;
```
