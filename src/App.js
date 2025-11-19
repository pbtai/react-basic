import "./styles.css";
/*
import Header from "./Header";
import MyInfo from "./MyInfo";

function App() {
  return (
    <div>
      <Header name="Lan" />
      <MyInfo name="Lan" />
    </div>
  );
}

*/

/*Biến thể: cập nhật tên ở App (Lift state)
Nếu bạn muốn tên được lưu ở App (ví dụ để Header và MyInfo cùng dùng tên mới), làm như sau.
*/

import { useState } from "react";
import Header from "./Header";
import MyInfo from "./MyInfo";
import MyCounter from "./Counter";
import FruitList from "./ListUsingMap";
import ControlledInput from "./ControlledComponents";
import CounterWithEffect from "./HookUseEffect";
import UserProfile from "./FetchDataUseEffect";
import SafeTimer from "./CleanupUseEffect";
function App() {
  const [name, setName] = useState("Tài");

  return (
    <div>
      <Header name={name} />
      <MyInfo
        name={name}
        onSave={(newName) => {
          setName(newName); // cập nhật tên ở App → Header cũng thay đổi
        }}
      />
      <FruitList />
      <hr />
      <ControlledInput />
      <hr />
      <MyCounter />
      <CounterWithEffect />
      <hr />
      <UserProfile />
      <SafeTimer />
    </div>
  );
}

export default App;
