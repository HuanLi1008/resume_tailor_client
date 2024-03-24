import axios from "axios";
import "./CreateUserPage.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function CreateUserPage(){
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();
    const createUser = (e)=>{
        e.preventDefault();
        setIsValid(true)
        if(!e.target.username.value){
            setIsValid(false);
            return;
        }
        const postUser = async()=>{
            const url = process.env.REACT_APP_API_URL;
            try {
                const response = await axios.post(url + "/api/user", {username: e.target.username.value});
            
                localStorage.setItem("user_id", response.data.id);
                navigate("/resume");
            } catch (error) {
                console.error("Can not create user: ", error);
            }
            
        }
        postUser();
    }
    return(
        <section className="user">
            <form className="user__form" onSubmit={createUser}>
                <label className="user__label" htmlFor="username">Type your username: </label>
                <input id="username" name="username" placeholder="username" className="user__input"></input>
                {!isValid && <div className="error user__error">Please enter your username!</div>}
                <button className="user__btn">Create</button>
            </form>
        </section>
    )
}