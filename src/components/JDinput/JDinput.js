import "./JDinput.scss";
export default function JDinput({handleSubmit}){

    return(
        <form className="job-description" onSubmit={handleSubmit}>
            <h2 className="job-description__title">Target Job Description👇</h2>
            <textarea className="job-description__input" placeholder="Job Description" name="jd"></textarea>
            <button className="job-description__btn" type="submit">Start Tailor</button>
        </form>
    )
}