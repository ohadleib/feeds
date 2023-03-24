const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex">
          <img className="logo" src="/img/logo.png" />
          <input className="search-bar" placeholder="Search" />
        </div>
        <div className="nav-right col-md-6">
          <ul>
            <li>
              <a className="active" href="">
                <img src="/img/home.png" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/message.png" />
                <span>Messaging</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/bell.png" />
                <span>Notifications</span>
              </a>
            </li>
          </ul>
          <div className="avatar">
            <img src="/img/profile.jpeg" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
