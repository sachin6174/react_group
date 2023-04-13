module.exports.Header=()=>{
    return (
        <header className="seperate">
            <div className ="left">
                <ul>
                    <label className="lbl" htmlFor="topic">Topic:</label>
                    <input name="topic" type="text"/>
                    <label  className="lbl" htmlFor="desc">Description</label>
                    <input name="desc" type="text"/>
                    <button className ="btn">Add</button>
                    <button className ="btn">Clear Notes</button>
                </ul>
            </div>
            <div className="right">
                <span className="user">UserName</span>
                <button className ="btn">Logout</button>
            </div>
        </header>
    )
}
/*
    HEADER
        div
            input ->topic
            input-> desc
            add ->btn
            clear all notes ->btn
        div
            usname display
            logout btn

*/