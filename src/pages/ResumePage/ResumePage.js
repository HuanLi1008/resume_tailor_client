import { Link } from "react-router-dom";
import "./ResumePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ResumeForm from "../../components/ResumeForm/ResumeForm";
import DisplayResume from "../../components/DisplayResume/DisplayResume";
export default function ResumePage(){
    const [resumedata, setResumedata] = useState(null);
    const user_id = localStorage.getItem("user_id");
    
    useEffect(()=>{
        if(!user_id) return;
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
    if(user_id === null){
        return(
            <section>
                <h1>You have to create a username first!</h1>
                <Link className="error" to={"/user"}>Clieck Here to Create a Username</Link>
            </section>
        )
    }
    if(!resumedata){
        return( 
            <main>
                <ResumeForm setResumeData={setResumedata}/>
            </main>
        )
    }else{
        return(
            <main>
                <DisplayResume data={resumedata} header={"my resume"}/>
            </main>
        ) 
    }
    
}