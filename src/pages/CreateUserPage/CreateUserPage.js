import axios from "axios";
import "./CreateUserPage.scss";
import { useNavigate } from "react-router-dom";
export default function CreateUserPage(){
    const navigate = useNavigate();
    const createUser = (e)=>{
        e.preventDefault();
        const postUser = async()=>{
            const url = process.env.REACT_APP_API_URL;
            const response = await axios.post(url + "/api/user", {username: e.target.username.value});
            
            localStorage.setItem("user_id", response.data[0].id);
            navigate("/resume");
        }
        postUser();
    }
    return(
        <section className="user">
            <form className="user__form" onSubmit={createUser}>
                <label className="user__label" htmlFor="username">Type your username: </label>
                <input id="username" name="username" placeholder="username" className="user__input"></input>
                <button className="user__btn">Create</button>
            </form>
        </section>
    )
}