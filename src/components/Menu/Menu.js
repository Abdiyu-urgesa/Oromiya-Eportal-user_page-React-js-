import "./Menu.css";
import { NavLink } from "react-router-dom";
function Menu(props) {
  return (
    <>
      <div className="Navbars">
        <ul className="NavbarWrappers">
          <li className="NavbarElement">
            <NavLink to={"/"} className="menulink">
              Home
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink to={"/services"} className="menulink">
              Service
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink to={"/topics"} className="menulink">
              Topics
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink to={"/myapplication"} className="menulink">
              My Application
            </NavLink>
          </li>
          <li className="NavbarElement">
            <NavLink to={"/more"} className="menulink">
              More
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
