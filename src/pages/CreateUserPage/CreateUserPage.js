import axios from "axios";
import "./CreateUserPage.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
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
                swal("Successfully Create Username", "Go upload your resume", "success")
                    .then(navigate("/resume"));
                
            } catch (error) {
                console.error("Can not create user: ", error);
                swal("Oops", "Fail to post your resume. Try again later", "error");
            }
            
        }
        postUser();
    }
    return(
        <main>
            <section className="user">
                <form className="user__form" onSubmit={createUser}>
                    <label className="user__label" htmlFor="username">Type your username👇 </label>
                    <input id="username" name="username" placeholder="username" className="user__input"></input>
                    {!isValid && <div className="error user__error">Please enter your username!</div>}
                    <div className="user__buttons">
                        <button className="user__btn">Create User</button>
                        <button className="user__btn">Log In</button>
                    </div>
                    
                </form>
            </section>
        </main>
    )
}