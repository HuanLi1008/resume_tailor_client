import { useContext, useState } from "react";
import "./ResumeForm.scss";
import axios from "axios";
import swal from "sweetalert";
import { UserContext } from "../../App";


export default function ResumeForm({data, setResumeData}){
    const [linkSection, setLinkSection] = useState(data? data.links: [{"link": ""}]);
    const [educationSection, setEducationSection] = useState(data? data.educations: [{"title": "", "subtitle": ""}]);
    const [experienceSection, setExperienceSection] = useState(data? data.experiences: [{"title": "", "subtitle": "", "bullet_points": ""}]);
    const [projectSection, setProjectSection] = useState(data? data.projects: [{"title": "", "subtitle": "", "bullet_points": ""}]);
    const {session} = useContext(UserContext);
    const user_id = session.user.id;
    const handleAdd = (category, arr, setarr)=>{
        let newItem = {};
        if(category === "link"){
            newItem={"link": ""};
        }else if(category === "education"){
            newItem={"title": "", "subtitle": ""};
        }else{
            newItem={"title": "", "subtitle": "", "bullet_points": ""};
        }
        setarr([...arr, newItem]);
    }
    const handleChange = (index, e, arr, setarr)=>{
        const {name, value} = e.target;
        const newArr = [...arr];
        newArr[index][name] = value;
        setarr(newArr);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const postData = async()=>{
            const {name, role, phone_number, email, summary, skills} = e.target;
            const newResume = {
                name: name.value, 
                role: role.value, 
                phone_number: phone_number.value,
                email: email.value,
                summary: summary.value,
                skills: skills.value,
                links: linkSection,
                educations: educationSection,
                experiences: experienceSection,
                projects: projectSection,
            }
            
            try {
                const url = process.env.REACT_APP_API_URL;
                
                const response = await axios.post(`${url}/api/resume/${user_id}`, newResume);
                
                swal("Successfully Upload", "Let's see your resume", "success")
                .then(()=> setResumeData(response.data));
                
            } catch (error) {
                console.log("Can not post resume: ", error);
                swal("Oops", "Fail to post your resume. Try again later", "error");
            }
            
        }
        postData();
    }
    return(
        <section className="resume">
            <form className="resume-form" onSubmit={handleSubmit}>
                <div className="resume-form__info">
                    <h1 className="resume-form__title">Basic Info</h1>
                    <hr className="resume-form__bar"/>
                    <div className="resume-form__row">
                        <label className="resume-form__label">
                            name: 
                            <input id="name" name="name" defaultValue={data? data.name: ""} placeholder="name" type="text" className="resume-form__input" required/>
                        </label>
                        <label className="resume-form__label">
                            role: 
                            <input id="role" name="role" defaultValue={data? data.role: ""} placeholder="role" type="text" className="resume-form__input" required/>
                        </label>
                    </div>
                    <div className="resume-form__row">
                        <label className="resume-form__label">
                            Phone Number: 
                            <input id="phone_number" name="phone_number" defaultValue={data? data.phone_number: ""} placeholder="phone_number" type="tel" className="resume-form__input" required/>
                        </label>
                        <label className="resume-form__label">
                            email: 
                            <input id="email" name="email" defaultValue={data? data.email: ""} placeholder="123@example.com" type="email" className="resume-form__input" required/>
                        </label>
                    </div>
                    <div className="resume-form__link">
                        <label className="resume-form__label resume-form__label--link" htmlFor="link1">Links:</label>
                        <div id="link-list">
                            {linkSection.map((item, index)=>{
                                return(
                                    <input id={`link${index + 1}`}  key={index + 1} name={`link`} placeholder={`link${index + 1}`} 
                                        value={item.link} onChange={(e)=> handleChange(index, e, linkSection, setLinkSection)}                                   
                                        className="resume-form__input" required/>
                                )
                            })}
                            <button className="resume-form__btn" onClick={()=> handleAdd("link", linkSection, setLinkSection)}>+ add link</button>
                        </div>
                        
                    </div>
                    <label className="resume-form__label resume-form__label--large">
                            Summary: 
                        <textarea id="summary" name="summary" defaultValue={data? data.summary: ""} placeholder="summary"  className="resume-form__input resume-form__input--large" required/>
                    </label>
                    <label className="resume-form__label resume-form__label--large">
                            skills: 
                        <textarea id="skills" name="skills" defaultValue={data? data.skills: ""} placeholder="skills"  className="resume-form__input resume-form__input--large" required/>
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
                                        <input name={`title`} placeholder="title"
                                            value={item.title} onChange={(e)=> handleChange(index, e, educationSection, setEducationSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`subtitle`} placeholder="subtitle"
                                            value={item.subtitle} onChange={(e)=> handleChange(index, e, educationSection, setEducationSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn" onClick={()=>handleAdd("education", educationSection, setEducationSection)}>+ add education</button>
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
                                        <input name={`title`} placeholder="title"
                                            value={item.title} onChange={(e)=> handleChange(index, e, experienceSection, setExperienceSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`subtitle`} placeholder="subtitle"
                                            value={item.subtitle} onChange={(e)=> handleChange(index, e, experienceSection, setExperienceSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label resume-form__label--large">
                                        bullet points: 
                                        <textarea name={`bullet_points`} placeholder="bullet points"
                                            value={item["bullet_points"]} onChange={(e)=> handleChange(index, e, experienceSection, setExperienceSection)}
                                            className="resume-form__input resume-form__input--large" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn" onClick={()=>handleAdd("experience", experienceSection, setExperienceSection)}>+ add experience</button>
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
                                        <input name={`title`} placeholder="title"
                                            value={item.title} onChange={(e)=> handleChange(index, e, projectSection, setProjectSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label">
                                        subtitle: 
                                        <input name={`subtitle`} placeholder="subtitle"
                                            value={item.subtitle} onChange={(e)=> handleChange(index, e, projectSection, setProjectSection)}
                                            className="resume-form__input resume-form__input--medium" required/>
                                    </label>
                                    <label className="resume-form__label resume-form__label--large">
                                        bullet points: 
                                        <textarea name={`bullet_points`} placeholder="bullet points"
                                            value={item["bullet_points"]} onChange={(e)=> handleChange(index, e, projectSection, setProjectSection)}
                                            className="resume-form__input resume-form__input--large" required/>
                                    </label>
                                </li>
                                
                            )
                        })}

                    </ul>
                    <button className="resume-form__btn" onClick={()=>handleAdd("project", projectSection, setProjectSection)}>+ add project</button>
                </div>
                <button className="resume-form__btn resume-form__btn--large" type="submit">Upload Resume</button>
            </form>
        </section>
    )
}