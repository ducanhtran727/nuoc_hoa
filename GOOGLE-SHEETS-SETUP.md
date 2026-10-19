# Kết nối form mua hàng

Dán URL Web App Apps Script kết thúc bằng `/exec` vào biến `URLscript` ở đầu `dist/app.js`.

Form gửi POST dạng form; Apps Script đọc qua `e.parameter`:

`fullname | phone | address | quantity | category | note | timestamp`

`category` là tên sản phẩm và dung tích. `timestamp` là thời gian ISO UTC. Giữ số điện thoại dạng văn bản để không mất số 0 đầu.

Web App chạy với **Execute as: Me**, **Who has access: Anyone**. Khi sửa Script, chọn New version rồi Deploy.

Không bắt buộc phản hồi có `success: true`. Website chấp nhận phản hồi HTTP thành công dạng text hoặc JSON (ví dụ `{"result":"success"}`). Nếu JSON ghi rõ `success: false`, `result: "error"`, `status: "error"` hoặc có `error`, website báo lỗi. Script chỉ nên trả HTTP thành công sau khi ghi Sheet xong.

Nút bị khóa khi đang gửi. Không tự động gửi lại khi lỗi mạng hoặc hết thời gian chờ; kiểm tra Sheet trước khi thử lại để tránh đơn trùng. HTTP thành công chỉ xác nhận request đã được xử lý, không tự kiểm tra nội dung trong Sheet.
