import axios from "axios";
import "./CreateUserPage.scss";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import swal from "sweetalert";
export default function CreateUserPage(){
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const usernameRef = useRef();
    const url = process.env.REACT_APP_API_URL;

    const createUser = (e)=>{
        e.preventDefault();
        setErrorMessage(null)
        const username = usernameRef.current.value;
        if(!username){
            setErrorMessage("Please enter your username!");
            return;
        }
        const postUser = async()=>{
            
            try {
                const response = await axios.post(url + "/api/user", {username: username});
            
                localStorage.setItem("user_id", response.data.id);
                await swal("Successfully Create Username", "Go upload your resume", "success")
                navigate("/resume");
                
            } catch (error) {
                console.error("Can not create user: ", error);
                setErrorMessage(error.response.data.error.message);
            }
            
        }
        postUser();
    }
    const login = (e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        if(!username){
            setErrorMessage("Please enter your username!");
            return;
        }
        const getUser = async()=>{
            try {
                const response = await axios.get(`${url}/api/user/${username}`);
                localStorage.setItem("user_id", response.data.id);
                await swal("Successfully Log In", "Go upload your resume", "success")
                navigate("/resume");
            } catch (error) {
                console.error("Can not get user: ", error);
                setErrorMessage(error.response.data.error.message);
            }
        }
        getUser();
    }
    return(
        <main>
            <section className="user">
                <form className="user__form" >
                    <label className="user__label" htmlFor="username">Type your username👇 </label>
                    <input ref={usernameRef} id="username" name="username" placeholder="username" className="user__input"></input>
                    {errorMessage && <div className="error user__error">{errorMessage}</div>}
                    <div className="user__buttons">
                        <button className="user__btn" onClick={createUser}>Create User</button>
                        <button className="user__btn" onClick={login}>Log In</button>
                    </div>
                    
                </form>
            </section>
        </main>
    )
}