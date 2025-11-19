/*
Minh họa mảng rỗng []: Tải dữ liệu từ API ngay khi component xuất hiện.

Hãy xem ví dụ chúng ta tải thông tin của một người dùng:
*/

import { useState, useEffect } from "react";

function UserProfile() {
  // State để lưu dữ liệu tải về
  const [user, setUser] = useState(null);
  // State để cho biết đang tải hay đã xong
  const [loading, setLoading] = useState(true);

  // Tác dụng phụ này sẽ chạy 1 LẦN DUY NHẤT
  useEffect(() => {
    console.log("Bắt đầu tải dữ liệu người dùng...");

    // Giả sử chúng ta gọi một API
    fetch("https://jsonplaceholder.typicode.com/users/1") // API giả
      .then((response) => response.json())
      .then((data) => {
        // Sau khi có dữ liệu, cập nhật state
        setUser(data);
        setLoading(false); // Đánh dấu là đã tải xong
      });
  }, []); // <-- MẢNG RỖNG nghĩa là "chỉ chạy 1 lần"

  // Hiển thị giao diện dựa trên state
  if (loading) {
    return <div>Đang tải...</div>;
  }

  return <div>Tên người dùng: {user.name}</div>;
}

/*
useEffect với [] đảm bảo rằng chúng ta chỉ gọi API một lần duy nhất khi UserProfile được tải, 
chứ không gọi lại mỗi khi có gì đó (có thể) render lại.
*/

export default UserProfile;
