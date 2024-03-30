import "./Header.scss";
import logo from '../../assets/logos/logo1.png';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../../App";
import swal from "sweetalert";
export default function Header({client}){
    const {session, setSession} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut =async ()=>{
        await client.auth.signOut({ scope: 'local' })
        setSession(null);
        await swal("Successfully Log Out","go back to home page", "success");
        navigate("/");
    }
    return(
        <nav className="nav-bar">
            <Link className="nav-bar__logo" to={"/"}><img className="nav-bar__logo--img" src={logo} alt="resume tailor logo"></img></Link>
            <div className="nav-bar__link">
                <NavLink className="nav-bar__link--body" to={"/resume"}>My Resume</NavLink>
                <NavLink className="nav-bar__link--body" to={"/tailor"}>My Tailor</NavLink>
                {
                    session?<button className="nav-bar__link--body" onClick={handleLogOut}>Log Out</button>
                     :<NavLink className="nav-bar__link--body" to={"/login"}>Log In</NavLink>
                }
            </div>
        </nav>
    )
}