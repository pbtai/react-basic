//V1
/*
function MyInfo(props) {
    return (
      <div>
        <h2>Tui tên là {props.name}</h2>
        <p>Là người mới học React</p>
        <p>Hồn nhiên sẽ bình yên</p>
      </div>
    );
  }
  
*/
//V2
//có thể viết lại như sau
// dùng thêm thẻ semantic: section
/*
function MyInfo({ name = "Tai" }) {
  return (
    <section>
      <h2>Tên của tui</h2>
      <p>Tui tên là {name}</p>
      <p>Là người mới học React</p>
      <p>Hi vọng sẽ bình yên</p>
    </section>
  );
}
*/

//V3
//cách dùng state (useState) để làm MyInfo có thể chỉnh tên trực tiếp trên trang
//khi thay đổi sẽ hiển thị ngay kết quả

/*
import { useState } from "react";

function MyInfo({ name: initialName = "Tai" }) {
  // TODO: Khởi tạo state 'name' từ initialName
  const [name, setName] = useState(initialName);

  // TODO: (Tuỳ) bạn có thể thêm state khác như `editing` nếu muốn bật/tắt chế độ edit

  return (
    <section>
      <h2>Tên của tui</h2>


      <p>Tui tên là {name}</p>

      // Input để sửa tên (liên kết với state 'name')
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên mới..."
      />

      // (Tuỳ) một nút reset về tên ban đầu
      <button onClick={() => setName(initialName)}>Reset</button>

      <p>Là người mới học React</p>
      <p>Hi vọng sẽ bình yên</p>
    </section>
  );
}
*/

//V4
//cách dùng state (useState) để làm MyInfo có thể chỉnh tên trực tiếp trên trang
//khi thay đổi không hiển thị ngay, phải nhấn nút Lưu để hiển thị ngay kết quả
// MyInfo.js
import { useState } from "react";

function MyInfo({ name: initialName = "Tai", onSave }) {
  // name: tên đang hiển thị
  const [name, setName] = useState(initialName);

  // draft: giá trị tạm trong input khi chỉnh sửa
  const [draft, setDraft] = useState(initialName);

  // editing: có đang ở chế độ edit hay không
  const [editing, setEditing] = useState(false);

  function startEdit() {
    setDraft(name); // copy current -> draft
    setEditing(true);
  }

  function cancelEdit() {
    setDraft(name); // revert draft
    setEditing(false);
  }

  function saveEdit() {
    setName(draft); // apply new name
    setEditing(false);
    // Nếu parent muốn biết thay đổi, gọi callback
    if (typeof onSave === "function") {
      onSave(draft);
    }
  }

  return (
    <section>
      <h2>Tên của tui</h2>

      <p>Tui tên là {name}</p>

      {editing ? (
        <div>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Nhập tên mới..."
          />
          <button onClick={saveEdit}>Lưu</button>
          <button onClick={cancelEdit}>Hủy</button>
        </div>
      ) : (
        <div>
          <button onClick={startEdit}>Chỉnh sửa tên</button>
        </div>
      )}

      <p>Là người mới học React</p>
      <p>Hi vọng sẽ bình yên</p>
    </section>
  );
}

export default MyInfo;
