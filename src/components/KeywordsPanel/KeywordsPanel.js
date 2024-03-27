
export default function KeywordsPanel({keywords}){

    return(
        <section className="keywords">
            <h2 className="keywords__title">Detected Keywords👇</h2>
            <ul className="keywords__box">
                {keywords.map((keyword, index)=>{
                    return <li key={index} className="keywords__item">{keyword}</li>
                })}
            </ul>
        </section>
    )
}