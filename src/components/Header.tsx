import home from "./assets/img/home.png";
import message from "./assets/img/message.png";
import bell from "./assets/img/bell.png";
import avatar from "./assets/img/profile.jpeg";
import logo from "./assets/img/logo.png";

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex">
          <img className="logo" src={logo} />
          <input className="search-bar" placeholder="Search" />
        </div>
        <div className="nav-right col-md-6">
          <ul>
            <li>
              <a className="active" href="">
                <img src={home} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={message} />
                <span>Messaging</span>
              </a>
            </li>
            <li>
              <a href="">
                <img src={bell} />
                <span>Notifications</span>
              </a>
            </li>
          </ul>
          <div className="avatar">
            <img src={avatar} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
