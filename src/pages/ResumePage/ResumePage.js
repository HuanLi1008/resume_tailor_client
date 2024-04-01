import { Link } from "react-router-dom";
import "./ResumePage.scss";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ResumeForm from "../../components/ResumeForm/ResumeForm";
import DisplayResume from "../../components/DisplayResume/DisplayResume";
import { UserContext } from '../../App';
export default function ResumePage(){
    const [resumedata, setResumedata] = useState(null);
    const {session} = useContext(UserContext);
    
    
    useEffect(()=>{
        if(!session) return;
        const fetchResume = async()=>{
            const url = process.env.REACT_APP_API_URL;
            try {
                const response = await axios.get(url+"/api/resume/" + user_id);
                if(response.data.message !== "no resume"){
                    
                    setResumedata(response.data);
                }else{
                    setResumedata(null);
                }
            } catch (error) {
                console.error("Can not fetch resume", error);
            }
        }
        fetchResume();
    })
    if(!session){
        return(
            <section className="login">
                <h1 className="login__title">Please log in first!</h1>
                <Link className="error login__link" to={"/login"}>Clieck here to log in or sign up</Link>
            </section>
        )
    }
    const user_id = session.user.id;
    if(!resumedata){
        return( 
            <main>
                <ResumeForm setResumeData={setResumedata}/>
            </main>
        )
    }else{
        return(
            <main>
                <DisplayResume data={resumedata}/>
            </main>
        ) 
    }
    
}