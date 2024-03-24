import "./ResumePage.scss";
export default function ResumePage(){
    const user_id = localStorage.getItem("user_id");
    if(user_id === null){
        return(
            <section>
                <h1>You have to create a username first!</h1>
            </section>
        )
    }
    return(
        <main>
            "This is resume page"
        </main>
    )
}