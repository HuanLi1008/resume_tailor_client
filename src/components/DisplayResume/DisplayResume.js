

export default function DisplayResume({ data }) {

  const {name, role, phone_number, email, summary, skills, links, educations, experiences, projects} = data;
  
  return (
    <section className="resume">
      <h1 className="resume__title"> My Resume</h1>
      <hr className="resume__divid-bar" />
      <div className="resume__body">
            <div className="resume__info">
                <h1 className="resume__title">{`${name} | ${role}`}</h1>
                <hr className="resume__divid-bar" />
                <p>{phone_number + " | " + email}</p>
                {links.map((link, index)=>{
                    return (<p key={index}>{link.link}</p>)
                })}
                <h2>Summary:</h2>
                <p>{summary}</p>
                <h2>Skills: </h2>
                <p>{skills}</p>
            </div>
            <div className="resume__education">
                <h1 className="resume__title">Education</h1>
                <hr className="resume__divid-bar" />
                {educations.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                        </div>
                    )
                })}
            </div>
            <div className="resume__experience">
                <h1 className="resume__title">Experience</h1>
                <hr className="resume__divid-bar" />
                {experiences.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <p>{item.bullet_points}</p>
                        </div>
                    )
                })}
            </div>
            <div className="resume__project">
            <h1 className="resume__title">Experience</h1>
                <hr className="resume__divid-bar" />
                {projects.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <p>{item.bullet_points}</p>
                        </div>
                    )
                })}
            </div>
      </div>
    </section>
  );
}
