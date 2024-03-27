import { useState } from "react";
import "./TailorPage.scss";
import KeywordsPanel from "../../components/KeywordsPanel/KeywordsPanel";
import JDinput from "../../components/JDinput/JDinput";
import DisplayResume from "../../components/DisplayResume/DisplayResume";
export default function TailorPage(){
    const [tailoring, setTailoring] = useState(false);
    return(
        <section className="tailor">
            <h1 className="tailor__title">Let's Tailor your Resume</h1>
            <div className="tailor__body">
                {tailoring ? <KeywordsPanel /> : <JDinput />}
                <hr className="tailor__divid-bar"/>
                {tailoring && <DisplayResume />}
            </div>
        </section>
    )
}
