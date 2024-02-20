export function Watcher({ id, fullname, movies, onRem, onSel }) {

    return <article className="watcher-article">
        <img src={`../assets/img/user.png`} alt="watcher img"></img>
        <h2>{fullname}</h2>
        {/* <p>{movies.join(", ")}</p> */}
        <hr></hr>
        <div>
            <button className="remove-btn" onClick={() => { onRem(id) }} >x</button>
            <button className="select-btn" onClick={() => onSel(id)} >Select</button>
        </div>
    </article>



}