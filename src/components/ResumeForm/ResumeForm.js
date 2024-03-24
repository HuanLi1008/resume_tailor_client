import { useState } from "react"

export default function ResumeForm(){
    const [linkSection, setLinkSection] = useState([{"link": ""}]);
    const [educationSection, setEducationSection] = useState([{"title": "", "subtitle": ""}]);
    const [experienceSection, setExperienceSection] = useState([{"title": "", "subtitle": "", "bullet_points": ""}]);
    const [projectSection, setProjectSection] = useState([{"title": "", "subtitle": "", "bullet_points": ""}]);
    return(
        <section>
            <form className="resume-form">
                <div className="resume-form__info">
                    <h1 className="resume-form__title">Basic Info</h1>
                    <hr className="resume-form__bar"/>
                    <div className="resume-form__row">
                        <label className="resume-form__label">
                            name: 
                            <input id="name" name="name" placeholder="name" type="text" className="resume-form__input" required/>
                        </label>
                        <label className="resume-form__label">
                            role: 
                            <input id="role" name="role" placeholder="role" type="text" className="resume-form__input" required/>
                        </label>
                    </div>
                    <div className="resume-form__row">
                        <label className="resume-form__label">
                            Phone Number: 
                            <input id="phone_number" name="phone_number" placeholder="phone_number" type="tel" className="resume-form__input" required/>
                        </label>
                        <label className="resume-form__label">
                            email: 
                            <input id="email" name="email" placeholder="123@example.com" type="email" className="resume-form__input" required/>
                        </label>
                    </div>
                    <div className="resume-form__link">
                        <label className="resume-form__label" htmlFor="link-list">Links: </label>
                        <div id="link-list">
                            {linkSection.map((item, index)=>{
                                return(
                                    <input key={index + 1} name={`link${index + 1}`} placeholder={`link${index + 1}`} 
                                        value={item.link}                                    
                                        className="resume-form__input" required/>
                                )
                            })}
                            <button className="resume-form__btn">+ add link</button>
                        </div>
                    </div>
                    <label className="resume-form__label">
                            Summary: 
                        <textarea id="summary" name="summary" placeholder="summary"  className="resume-form__input resume-form__input--large" required/>
                    </label>
                    <label className="resume-form__label">
                            skills: 
                        <textarea id="skills" name="skills" placeholder="skills"  className="resume-form__input resume-form__input--large" required/>
                    </label>
                </div>
                <div className="resume-form__education">
                    <h1 className="resume-form__title">Education</h1>
                    <hr className="resume-form__bar"/>
                    <ul className="resume-form__list">
                        {educationSection.map((item, index)=>{
                            return(
                                <li key={index+1} className="resume-form__item" name={`education${index}`}>
                                    <h2 className="resume-form__subtitle">{`Education ${index + 1}: `}</h2>
                                    <label className="resume-form__label">
                                        title: 
                                        <input name={`education-title${index}`} placeholder="title"
                                            value={item.title}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`education-subtitle${index}`} placeholder="subtitle"
                                            value={item.subtitle}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn">+ add education</button>
                </div>
                <hr className="resume-form__bar--section"/>
                <div className="resume-form__experience">
                    <h1 className="resume-form__title">Experience</h1>
                    <hr className="resume-form__bar"/>
                    <ul className="resume-form__list">
                        {experienceSection.map((item, index)=>{
                            return(
                                <li key={index+1} className="resume-form__item" name={`experience${index}`}>
                                    <h2 className="resume-form__subtitle">{`Experience ${index + 1}: `}</h2>
                                    <label className="resume-form__label">
                                        title: 
                                        <input name={`experience-title${index}`} placeholder="title"
                                            value={item.title}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`experience-subtitle${index}`} placeholder="subtitle"
                                            value={item.subtitle}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        bullet points: 
                                        <textarea name={`experience-bullet_points${index}`} placeholder="bullet points"
                                            value={item.bullet_points}
                                            className="resume-form__input resume-form__input--large" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn">+ add experience</button>
                </div>
                <div className="resume-form__project">
                    <h1 className="resume-form__title">project</h1>
                    <hr className="resume-form__bar"/>
                    <ul className="resume-form__list">
                        {projectSection.map((item, index)=>{
                            return(
                                <li key={index+1} className="resume-form__item" name={`project${index}`}>
                                    <h2 className="resume-form__subtitle">{`project ${index + 1}: `}</h2>
                                    <label className="resume-form__label">
                                        title: 
                                        <input name={`project-title${index}`} placeholder="title"
                                            value={item.title}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`project-subtitle${index}`} placeholder="subtitle"
                                            value={item.subtitle}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        bullet points: 
                                        <textarea name={`project-bullet_points${index}`} placeholder="bullet points"
                                            value={item.bullet_points}
                                            className="resume-form__input resume-form__input--large" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn">+ add project</button>
                </div>
                <button className="resume-form__btn--large" type="submit">Upload Resume</button>
            </form>
        </section>
    )
}