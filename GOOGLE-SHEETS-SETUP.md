# Kết nối form mua hàng

Trong `dist/app.js`, thay `const URLscript = '';` bằng URL Web App Google Apps Script kết thúc bằng `/exec`.

Form gửi POST dạng `application/x-www-form-urlencoded`. Apps Script đọc các giá trị bằng `e.parameter`:

`fullname | phone | address | quantity | category | note | timestamp`

- `category`: tên thương hiệu + sản phẩm + dung tích chiết 10ml được chọn.
- `quantity`: số lượng từ 1 đến 3.
- `timestamp`: thời gian ISO 8601 UTC khi khách gửi form.
- Số điện thoại cần ghi dưới dạng văn bản để giữ số 0 đầu.

Script phải trả JSON `{ "success": true }` sau khi ghi Sheet thành công; khi thất bại trả `{ "success": false }`. Triển khai Web App với quyền chạy bằng tài khoản chủ sở hữu và quyền truy cập cho khách mua hàng. Khi thay mã Apps Script, cập nhật deployment tương ứng.

Website chỉ báo đã nhận đơn khi đọc được phản hồi thành công. Không dùng `no-cors` vì không thể biết Sheet đã ghi đơn hay chưa. Nếu gặp lỗi mạng, timeout hoặc CORS, đơn có thể đã tới server; kiểm tra Sheet trước khi gửi lại. Hiện chưa thể kiểm tra ghi Sheet thật vì chưa có URLscript.
