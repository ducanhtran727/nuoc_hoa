# Kết nối form mua hàng

Trong `dist/app.js`, thay `const URLscript = '';` bằng URL Web App Google Apps Script kết thúc bằng `/exec`.

Form gửi POST dạng `application/x-www-form-urlencoded`. Apps Script đọc các giá trị bằng `e.parameter`:

`fullname | phone | address | quantity | category | note | timestamp`

- `category`: tên thương hiệu + sản phẩm + dung tích chiết 10ml được chọn.
- `quantity`: số lượng từ 1 đến 3.
- `timestamp`: thời gian ISO 8601 UTC khi khách gửi form.
- Số điện thoại cần ghi dưới dạng văn bản để giữ số 0 đầu.

Script phải trả JSON `{ "success": true }` sau khi ghi Sheet thành công; khi thất bại trả `{ "success": false }`. Triển khai Web App với quyền chạy bằng tài khoản chủ sở hữu và quyền truy cập cho khách mua hàng. Khi thay mã Apps Script, cập nhật deployment tương ứng.

Website chỉ báo đã nhận đơn khi đọc được phản hồi thành công. Không dùng `no-cors` vì không thể biết Sheet đã ghi đơn hay chưa. Nếu gặp lỗi mạng, timeout hoặc CORS, đơn có thể đã tới server; kiểm tra Sheet trước khi gửi lại. Chỉ kiểm tra ghi Sheet thật sau khi cấu hình URLscript và quyền truy cập Web App.


## Khi gặp 403 / CORS

1. Trong Apps Script, mở **Deploy → Manage deployments → Edit**.
2. Chọn **Execute as: Me** và **Who has access: Anyone** (không phải chỉ người có tài khoản Google).
3. Chọn **New version**, bấm **Deploy**, cấp quyền cho script bằng tài khoản chủ sở hữu nếu được yêu cầu.
4. Sao chép URL Web App `/exec` vào `URLscript`. URL của deployment mới có thể khác URL cũ.
5. Nếu không có lựa chọn Anyone, kiểm tra chính sách quản trị Google Workspace của tài khoản.
6. Thử lại từ website và kiểm tra Apps Script Executions cùng Sheet. Chỉ báo thành công khi backend trả JSON `{"success":true}` sau khi ghi thành công.

HTTP 403 nghĩa là request bị từ chối; trình duyệt có thể đồng thời hiện lỗi CORS do phản hồi từ chối không có header cho phép nguồn. Sửa quyền deployment trước. Không đổi sang `no-cors` để che lỗi vì cách đó không xác nhận được đơn đã ghi thành công.

Tài liệu: https://developers.google.com/apps-script/guides/web
