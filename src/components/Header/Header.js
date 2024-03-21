import "./Header.scss";
import logo from '../../assets/logos/logo.png';
import { Link, NavLink } from "react-router-dom";
export default function Header(){
    return(
        <nav className="nav-bar">
            <Link className="nav-bar__logo" to={"/"}><img src={logo} alt="resume tailor logo"></img></Link>
            <div className="nav-bar__link">
                <NavLink to={"/resume"}>My Resume</NavLink>
                <NavLink to={"/tailor"}>My Tailor</NavLink>
            </div>
        </nav>
    )
}