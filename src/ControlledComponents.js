/*
Ý tưởng là:

Chúng ta dùng state của React để lưu trữ giá trị của ô input.
Chúng ta "ra lệnh" cho ô input phải hiển thị giá trị đang có trong state.
Khi người dùng gõ phím, chúng ta "bắt" sự kiện đó (onChange) và cập nhật state.
Luồng hoạt động 🔄:

Người dùng gõ chữ "A".
Sự kiện onChange được kích hoạt.
Hàm handleChange được gọi.
event.target.value lúc này là "A".
setInputValue('A') được gọi, cập nhật state.
Component được render lại.
Ô <input> nhận value={inputValue} (bây giờ là "A").
Thẻ <p> hiển thị inputValue (bây giờ là "A").
Đây là cách dữ liệu chảy một vòng từ state -> input -> event -> state
*/
import { useState } from "react";

function ControlledInput() {
  // 1. Dùng state để lưu trữ giá trị của ô input
  const [inputValue, setInputValue] = useState(""); // Bắt đầu với chuỗi rỗng

  // 2. Hàm này sẽ được gọi MỖI KHI người dùng gõ
  function handleChange(event) {
    // 'event.target.value' là giá trị MỚI NHẤT trong ô input
    setInputValue(event.target.value);
  }

  // Thực hành: Tạo hàm xử lý reset
  function handleReset() {
    setInputValue(""); // Chính là logic của bạn!
  }

  return (
    <div>
      <h3>Minh họa Forms Control input</h3>
      <label>Nhập nội dung: </label>

      {/* 3. Liên kết state với ô input */}
      <input
        value={inputValue} // "Bắt buộc" input phải hiển thị giá trị của state
        onChange={handleChange} // "Báo" cho React khi giá trị thay đổi
      />

      {/* Thực hành: Gắn hàm vào nút mới */}
      <button onClick={handleReset}>Reset</button>

      <hr />

      {/* 4. Hiển thị state ngay bên dưới */}
      <h4>Bạn đang gõ:</h4>
      <p>{inputValue}</p>
    </div>
  );
}

/*
Thực hành:
Nếu bạn muốn thêm một nút "Reset", khi nhấn vào sẽ xóa trắng nội dung trong ô input, 
bạn sẽ làm thế nào? (Gợi ý: "Xóa trắng" ô input thực chất là làm gì với state?)
*/

export default ControlledInput;
