import { useState } from "react";
import "./JDinput.scss";
export default function JDinput({handleSubmit}){
    const [error, setError] = useState(null);
    const handleClick = (e)=>{
        e.preventDefault();
        if(!e.target.jd.value){
            setError("Please provide a job description");
            return;
        }
        handleSubmit(e);
    }
    return(
        <form className="job-description" onSubmit={handleClick}>
            <h2 className="job-description__title">Target Job Description👇</h2>
            <textarea className="job-description__input" placeholder="Job Description" name="jd"></textarea>
            {error && <p className="error job-description__error">{error}</p>}
            <button className="job-description__btn" type="submit">Start Tailor</button>
        </form>
    )
}