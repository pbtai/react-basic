import { useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);
  // Hàm xử lý tăng
  function handleIncrement() {
    setCount(count + 1);
  }

  // Hàm xử lý giảm (MỚI)
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>Số đếm: {count}</h3>

      <button onClick={handleIncrement}>Tăng lên 1</button>

      {/* Nút mới thêm vào */}
      <button onClick={handleDecrement}>Giảm đi 1</button>
    </div>
  );
}

export default MyCounter;
