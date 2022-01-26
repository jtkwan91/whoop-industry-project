import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navigation">
        <NavLink to="/overview"  className="navigation__link">
            <h3 className="navigation__title">overview</h3>
        </NavLink>
        <NavLink to="/" className="navigation__link">
            <h3 className="navigation__title">strain</h3>
        </NavLink>
        <NavLink to="/recovery" className="navigation__link">
            <h3 className="navigation__title">recovery</h3>
        </NavLink>
        <NavLink to="/sleep" className="navigation__link">
            <h3 className="navigation__title">sleep</h3>
        </NavLink>
    </div>
  )
}
