import '../stylesheets/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <div className="menu">
      <h1 className="logo main-text-color">BookVault</h1>

      <p className="secondary-text-color">BOOKS</p>
      <p className="secondary-text-color">CATEGORIES</p>
    </div>

    <div className="user-avatar">
      <img className="avatar" src="https://img.icons8.com/ios-glyphs/30/4a90e2/user--v1.png" alt="user" />
    </div>
  </div>
);

export default NavBar;
