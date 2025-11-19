/*
"Vòng đời" và Tác dụng phụ (useEffect)
Bây giờ, component của bạn đã có thể "sống" (render) và "phản ứng" (state). 
Nhưng sẽ ra sao nếu chúng ta muốn thực hiện một hành động khi một điều gì đó xảy ra?

Ví dụ:

Bạn muốn tải dữ liệu (fetch data) từ một máy chủ (API) ngay khi component vừa xuất hiện?
Bạn muốn thay đổi tiêu đề (title) của trang web mỗi khi state count thay đổi?
📥 Tải dữ liệu (fetch) từ một API/server.
🏷️ Thay đổi tiêu đề của tab trình duyệt (document.title).
⏱️ Thiết lập một bộ đếm giờ (setInterval hoặc setTimeout).
💾 Lưu dữ liệu vào localStorage của trình duyệt.

Những hành động "bên lề" này (như gọi API, thay đổi DOM) được gọi là "Side Effects" (Tác dụng phụ). 
Trong React, chúng ta quản lý chúng bằng một "công cụ" (hook) mới rất quan trọng: useEffect.
*/
/*
Cú pháp của nó có 2 phần:

import { useEffect } from 'react';

useEffect(() => {
  // 1. HÀM TÁC DỤNG PHỤ
  //    Code bạn muốn chạy (ví dụ: fetch API, thay đổi document.title)
}, [2. MẢNG PHỤ THUỘC] );
=>Phần 2 (Mảng phụ thuộc) là phần quan trọng nhất. 
Nó nói với React: "Này React, hãy chạy lại hàm tác dụng phụ ở trên CHỈ KHI một giá trị nào đó 
trong mảng này thay đổi."

Ví dụ: Chúng ta muốn thay đổi tiêu đề tab trình duyệt mỗi khi count() thay đổi:
Nếu bạn chạy code này, bạn sẽ thấy console.log và tiêu đề tab chỉ cập nhật
khi bạn nhấn nút (vì count thay đổi).
*/
import { useState, useEffect } from "react";

function CounterWithEffect() {
  const [count, setCount] = useState(0);

  // "Tác dụng phụ" này sẽ chạy khi 'count' thay đổi
  useEffect(() => {
    // 1. useEffect: Thay đổi tiêu đề tab
    console.log("useEffect đang chạy vì count thay đổi!");
    document.title = `Bạn đã nhấn ${count} lần`;
  }, [count]); // 2. Mảng phụ thuộc: "Hãy theo dõi 'count'"

  return (
    <div>
      <p>Hãy nhìn lên tiêu đề tab của trình duyệt.</p>
      <button onClick={() => setCount(count + 1)}>Nhấn tôi: {count}</button>
    </div>
  );
}

export default CounterWithEffect;

/*
Câu hỏi
Như đã biết, [count] nghĩa là "chạy lại tác dụng phụ này khi count thay đổi."

Vậy, nếu chúng ta muốn một tác dụng phụ (ví dụ: tải dữ liệu người dùng) 
chỉ chạy 1 lần duy nhất khi component xuất hiện lần đầu, và không bao giờ chạy lại, 
bất kể state nào thay đổi...
Bạn nghĩ chúng ta nên truyền gì vào mảng phụ thuộc [ ... ]?
=> Đáp án: truyền mảng rỗng: [] (Mảng này không phụ thuộc vào bất cứ state hay prop nào, không được truyền 'null')
Xem minh họa mảng rỗng [] FetchDataUseEffect.js
*/
