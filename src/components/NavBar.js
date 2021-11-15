import '../stylesheets/NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <div className="menu">
      <h1 className="menu-item">BookVault</h1>

      <p className="menu-item">BOOKS</p>
      <p className="menu-item">CATEGORIES</p>
    </div>

    <div className="user-avatar">
      <p>MA</p>
    </div>
  </div>
);

export default NavBar;
