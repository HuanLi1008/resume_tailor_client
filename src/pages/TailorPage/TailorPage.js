import { useState, useEffect } from "react";
import "./TailorPage.scss";
import KeywordsPanel from "../../components/KeywordsPanel/KeywordsPanel";
import JDinput from "../../components/JDinput/JDinput";

import { Link } from "react-router-dom";
import axios from "axios";
import JDdisplay from "../../components/JDdisplay/JDdisplay";
export default function TailorPage(){
    const [tailoring, setTailoring] = useState(false);
    const [hasResume, setHasResume] = useState(false);
    const [tailoredData, setTailoredData] = useState(null);
    const [jd, setJd] = useState(null);

    const user_id = localStorage.getItem("user_id");
    
    const url = process.env.REACT_APP_API_URL;
    useEffect(()=>{
        if(!user_id) return;
        const fetchResume = async()=>{
            
            try {
                const response = await axios.get(url+"/api/resume/" + user_id);
                if(response.data.message !== "no resume"){
                    setHasResume(true)
                }else{
                    setHasResume(false);
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
    if(!hasResume){
        return (
            <section>
                <h1>You haven't upload your resume!</h1>
                <Link className="error" to={"/resume"}>Clieck Here to Upload your Resume</Link>
            </section>
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const fetchData = async()=>{
            try {
                
                const response = await axios.post(`${url}/api/tailor/${user_id}`, {"jd": e.target.jd.value});
                setJd(e.target.jd.value);
                setTailoredData(response.data);
                setTailoring(true);
            } catch (error) {
                console.error("Can not tailor resume: ", error);
            }
        }
        fetchData();
    }

    return(
        <main className="tailor">
            <h1 className="tailor__title">Let's Tailor your Resume</h1>
            <div className="tailor__body">
                {!tailoring && <JDinput handleSubmit={handleSubmit}/>}
                {tailoring && 
                    <section className="tailor__content">
                        <div className="tailor__content--left">
                            
                            <KeywordsPanel keywords={tailoredData.keywords}/>
                            <JDdisplay jd={jd}/>
                        </div>
                        <hr className="tailor__divid-bar"/>
                        <iframe className="tailor__content--right" src={url + tailoredData.resumePath} title="my tailored resume"></iframe>
                    </section>
                }
               
            </div>
        </main>
    )
}
