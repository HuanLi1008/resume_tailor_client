import { Link} from "react-router-dom";
import "./LandingPage.scss";
export default function LandingPage(){
    return (
        <main className="main">
            <div className="oval">
                <h1 className="oval__title"> Welcom to Resume Tailor</h1>
            </div>
            <div className="pointer">
                <div className="pointer__item"><Link className="pointer__item--content" to={"/user"}>Create Account</Link></div>
                <div className="pointer__item"><Link className="pointer__item--content" to={"/resume"}>Upload Resume</Link></div>
                <div className="pointer__item"><Link className="pointer__item--content" to={"/tailor"}>Tailor Resume</Link></div>
            </div>
        </main>
    )
}