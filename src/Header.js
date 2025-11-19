/*
function Header(props) {
    return (
      <div>
        <h2>Chào mừng {props.name} đến với trang của React!</h2>      
      </div>
    );
  }
*/
//có thể viết lại
// dùng thêm thẻ semantic: header
function Header({ name }) {
  return (
    <header>
      <h2>Chào mừng {name} đến với trang của React!</h2>
    </header>
  );
}
export default Header;
