import "./DisplayResume.scss";

export default function DisplayResume({ data, header }) {

  const {name, role, phone_number, email, summary, skills, links, educations, experiences, projects} = data;
  const splitBulletPoints = (points)=>{
    const arr = points.split("\n");
    
    return arr;
  }
  return (
    <section className="resume">
      <h1 className="resume__title resume__title--page"> {header}</h1>
      <hr className="resume__divid-bar" />
      <div className="resume__body">
            <div className="resume__info">
                <h1 className="resume__title">{`${name} | ${role}`}</h1>
                <hr className="resume__divid-bar" />
                <h2 className="resume__subtitle">{phone_number + " | " + email}</h2>
                {links.map((link, index)=>{
                    return (<p className="resume__content" key={index}>{link.link}</p>)
                })}
                <h2 className="resume__subtitle">Summary:</h2>
                <p className="resume__content">{summary}</p>
                <h2 className="resume__subtitle">Skills: </h2>
                <p className="resume__content">{skills}</p>
            </div>
            <div className="resume__education">
                <h1 className="resume__title">Education</h1>
                <hr className="resume__divid-bar" />
                {educations.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2 className="resume__subtitle">{item.title}</h2>
                            <p className="resume__content">{item.subtitle}</p>
                        </div>
                    )
                })}
            </div>
            <hr className="resume__divid-bar--section"/>
            <div className="resume__experience">
                <h1 className="resume__title">Experience</h1>
                <hr className="resume__divid-bar" />
                {experiences.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2 className="resume__subtitle">{item.title}</h2>
                            <p className="resume__content resume__subtitle--small">{item.subtitle}</p>
                            {splitBulletPoints(item.bullet_points).map((point, i) =>{
                                return <p className="resume__content" key={i}>{point}</p>
                            })}
                        </div>
                    )
                })}
            </div>
            <div className="resume__project">
                <h1 className="resume__title">Project</h1>
                <hr className="resume__divid-bar" />
                {projects.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2 className="resume__subtitle">{item.title}</h2>
                            <p className="resume__content resume__subtitle--small">{item.subtitle}</p>
                            {splitBulletPoints(item.bullet_points).map((point, i) =>{
                                return <p className="resume__content" key={i}>{point}</p>
                            })}
                        </div>
                    )
                })}
            </div>
      </div>
      {header === "my resume" && <button className="resume__btn">Edit Resume</button>}
    </section>
  );
}
