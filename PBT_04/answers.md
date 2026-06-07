# Câu A1
```
Position	Vẫn chiếm chỗ trong flow?	Tham chiếu vị trí	                    Cuộn theo trang?	Use case

Static	    Có	                        Vị trí mặc định trong luồng tài liệu	Có	                Bố cục thông thường của trang
Relative    Có                          So với vị trí ban đầu của chính nó      Có                  Dịch chuyển nhẹ phần tử, 
                                                                                                    Làm điểm tọa độ (anchor) cho con absolute
Absolute    Không                       So với phần tử cha gần nhất có position Có                  Tooltip, dropdown, popup nhỏ, icon đè lên
                                        khác static                                                 ảnh
Fixed       Không                       So với cửa sổ trình duyệt (viewport)    Không               Nút Back to Top, menu cố định, chat widget
sticky      Có                          Ban đầu như relative, khi cuộn sẽ       Không (sau khi bám) Header/menu bám trên đầu trang khi cuộn
                                        bám theo viewport
Câu hỏi thêm: Khi nào absolute tham chiếu body? Giải thích khái niệm "nearest positioned ancestor".
- Nếu không tìm thấy phần tử cha nào có position khác static, thì phần tử absolute sẽ tham chiếu đến trang (thường là body hoặc viewport).
-Absoulte sẽ tham chiếu đến phần tử gần nhất có thuộc tính position khác static
-Nearest Positioned Ancestor là phần tử tổ tiên gần nhất có thuộc tính position khác static.
```
# Câu A2
```
Trường hợp 1:
.container { display: flex; }
.item { flex: 1; }
Layout ra 1 hàng 4 item có độ dài rộng bằng nhau
| item | item | item | item |
Trường hợp 2:
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
Layout ra 3 hàng 2 item và mỗi cột sẽ chiếm khoảng nửa
| item1 | | item2 |
| item3 | | item4 |
| item5 | | item6 |
Trường hợp 3:
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
Items trải đều ngang, cách đều nhau, căn giữa theo chiều dọc không có khoảng trống giữa 2 đầu.
Layout ra 1 hàng 3 item.
|item           item           item|

Trường hợp 4:
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    gap: 20px;
}
Tạo ra 1 hàng 3 item, 2 item đầu cuối cố định 200px item ở giữa sẽ co giãn theo chữ.
| 200px |   flexible   | 200px |

Trường hợp 5:
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
Layout tạo ra 3 hàng 7 item, mỗi hàng tối đa chứa 3 item và khoảng cách giữa các cột bằng nhau.
| item1 | | item2 | | item3 |
| item4 | | item5 | | item6 |
| item7 |