import "./CreateUserPage.scss";
export default function CreateUserPage(){

    return(
        <section className="user">
            <form className="user__form">
                <label className="user__label" htmlFor="username">Type your username: </label>
                <input id="username" name="username" placeholder="username"></input>
                <button className="user__btn">Create</button>
            </form>
        </section>
    )
}