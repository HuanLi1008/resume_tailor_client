import "./JDinput.scss";
export default function JDinput({}){

    return(
        <form className="job-description">
            <h2 className="job-description__title">Target Job Description👇</h2>
            <textarea className="job-description__input" placeholder="Job Description" name="jd"></textarea>
            <button className="job-description__btn" type="submit">Start Tailor</button>
        </form>
    )
}