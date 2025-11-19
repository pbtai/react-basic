/*
Dùng useEffect để bắt đầu một bộ đếm giờ (setInterval) chạy mỗi giây. 
Chuyện gì sẽ xảy ra nếu component đó bị ẩn đi (unmount) khỏi màn hình? 
Bộ đếm giờ đó vẫn sẽ tiếp tục chạy...
Làm thế nào để chúng ta dừng bộ đếm giờ đó khi component "biến mất"?
=> React sử dụng một cơ chế rất thông minh:

Chỉ cần return (trả về) một hàm từ bên trong useEffect. 
React sẽ tự động giữ lấy hàm mà bạn trả về đó, 
và gọi nó khi component "biến mất" (unmount) khỏi màn hình.
*/
/* 
useEffect(() => {
  // 1. PHẦN "TÁC DỤNG PHỤ"
  //    (Ví dụ: Bắt đầu một bộ đếm giờ, đăng ký một sự kiện...)
  const timerId = setInterval(() => {
    console.log("⏱️ Tick");
  }, 1000);

  // 2. PHẦN "DỌN DẸP" 🧹
  //    React sẽ chạy hàm này khi component biến mất.
  return () => {
    console.log("🧹 Dọn dẹp bộ đếm giờ...");
    // Bạn sẽ đặt logic dọn dẹp ở đâu?
  };
}, []); // Mảng rỗng = chỉ chạy 1 lần khi component xuất hiện

*/

/* 
??? đặt lệnh clearInterval(timerId) vào đâu để đảm bảo bộ đếm giờ dừng lại khi component "biến mất"?
=> vào bên trong return()
*/

import { useState, useEffect } from "react";

function SafeTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. TÁC DỤNG PHỤ: Bắt đầu bộ đếm
    const timerId = setInterval(() => {
      // Dùng "functional update" để lấy state mới nhất
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 2. HÀM DỌN DẸP 🧹:
    //    React sẽ gọi hàm này khi component "biến mất"
    return () => {
      console.log("Dọn dẹp bộ đếm giờ!");
      // Chính là logic của bạn:
      clearInterval(timerId);
    };
  }, []); // Mảng rỗng = chỉ chạy 1 lần khi component xuất hiện

  return <h4>Số giây đã trôi qua: {seconds} </h4>;
}

export default SafeTimer;

/*
Mounting (Gắn vào) 🏠: Là hành động React lần đầu tiên tạo ra component của bạn và đưa nó lên màn hình 
(ví dụ: khi bạn thêm <SafeTimer /> vào App.js và tải trang).

Unmounting (Gỡ bỏ) ❌: Là hành động React phá hủy component đó và gỡ nó khỏi màn hình
 (ví dụ: khi bạn chuyển trang, hoặc state showTimer chuyển thành false).

Không khai báo: Component đó đơn giản là không bao giờ tồn tại.

Sử dụng lại phép ẩn dụ khách sạn 🏨:

Mounting: Bạn check-in vào phòng. (Hàm useEffect chạy).

Unmounting: Bạn check-out khỏi phòng. (Hàm return dọn dẹp 🧹 chạy).

Không khai báo <SafeTimer />: Bạn chưa bao giờ đến khách sạn đó.
*/
