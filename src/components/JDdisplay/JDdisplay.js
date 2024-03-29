import "./JDdisplay.scss";
export default function JDdisplay({jd}){

    return(
        <section className="jd">
            <h2 className="jd__title">Your target job description👇</h2>
            <div className="jd__body">{jd}</div>

            
        </section>
    )
}
