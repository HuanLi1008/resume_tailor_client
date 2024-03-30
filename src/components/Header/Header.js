import "./Header.scss";
import logo from '../../assets/logos/logo1.png';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../../App";
export default function Header(){
    const session = useContext(UserContext);
    
    return(
        <nav className="nav-bar">
            <Link className="nav-bar__logo" to={"/"}><img className="nav-bar__logo--img" src={logo} alt="resume tailor logo"></img></Link>
            <div className="nav-bar__link">
                <NavLink className="nav-bar__link--body" to={"/resume"}>My Resume</NavLink>
                <NavLink className="nav-bar__link--body" to={"/tailor"}>My Tailor</NavLink>
            </div>
        </nav>
    )
}