/*
Dùng .map() để "biến đổi" một mảng dữ liệu (như mảng ['Táo', 'Cam']) 
thành một mảng React elements (như [<li>Táo</li>, <li>Cam</li>]).
*/

/* 
//Nhớ lại phương thức .map trong JS
Nhiệm vụ của nó là: Lấy một mảng, "biến đổi" (transform) từng phần tử 
trong mảng đó theo một quy tắc bạn đặt ra, và trả về một mảng mới 
chứa các phần tử đã biến đổi.
const numbers = [1, 2, 3];

// "Biến đổi" mỗi số thành số đó nhân 2
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

// doubledNumbers bây giờ là [2, 4, 6]
*/
//Sử dụng .map() trong React
import { useState } from "react";

function FruitList() {
  // 1. Dùng state để lưu danh sách hoa quả
  const [fruits, setFruits] = useState(["Táo", "Cam", "Xoài"]);
  //minh họa thực hành
  const [users, setUsers] = useState([
    { id: 1, name: "Tuấn" },
    { id: 2, name: "Lan" },
  ]);
  return (
    <div>
      <h2>Minh họa phương thức .map()</h2>
      <h3>Danh sách hoa quả:</h3>
      <ul>
        {/* 2. Dùng {} để "mở cổng" JavaScript */}
        {fruits.map((fruit) => {
          // 3. Biến đổi mỗi 'fruit' (string) thành một <li>
          //return <li>{fruit}</li>;
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
      <hr />

      {/*Minh họa thực hành */}
      <h2>Danh sách sinh viên</h2>
      {/* 2. Dùng {} để "mở cổng" JavaScript */}
      {users.map((user) => {
        return <p key={user.id}>+ {user.name}</p>;
      })}
      {/* Hoặc viết */}
      {users.map((user) => (
        <p key={user.id}>- {user.name}</p>
      ))}
    </div>
  );
}

/* Khi chạy code trên sẽ có warning:
Each child in a list should have a unique "key" prop.
Dùng prop: KEY để xác định mỗi phần tử là duy nhất
dùng fruit làm key vì tên hoa quả là duy nhất. 
Nếu dữ liệu phức tạp hơn, chúng ta thường dùng ID, ví dụ: key={item.id})
*/

// ... bên trong hàm map ở trên...thay thế return thành:
//return <li key={fruit}>{fruit}</li>;

/*
Câu hỏi thực hành:
Giả sử bạn có một state chứa một mảng các đối tượng (object) như sau:
const [users, setUsers] = useState([ { id: 1, name: 'Tuấn' }, { id: 2, name: 'Lan' } ]);
Bạn sẽ viết .map() như thế nào để hiển thị tên của mỗi người dùng trong một thẻ <p> (paragraph)? 
(Đừng quên key nhé!)
Xem code minh họa Danh sách sinh viên
*/

export default FruitList;
