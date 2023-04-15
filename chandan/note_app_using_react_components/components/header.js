module.exports.Header=()=>{
    return (
        <header className="seperate  bg-black text-white p-4 rounded-2xl mt-2 flex flex-wrap">
            <div className ="left ">
                <ul>
                    <label className="lbl" htmlFor="topic">Topic:</label>
                    <input placeholder="enter-topic" className="mx-2 rounded-lg" name="topic" type="text"/>
                    <label   className="lbl " htmlFor="desc">Description:</label>
                    <input placeholder="enter-desc" className="mx-2 rounded-lg" name="desc" type="text"/>
                    <button className ="btn bg-gray-400 px-2 rounded-xl mx-2 text-black font-serif font-extrabold" id="add_btn">Add</button>
                    <button className ="btn bg-gray-400 px-2 rounded-xl mx-2 text-black font-serif font-extrabold" >Clear Notes</button>
                </ul>
            </div>
            <div className="right mx-40">
                <span className="user bg-gray-200 rounded-xl mx-2 text-black font-serif font-extrabold">UserName</span>
                <button className ="btn bg-gray-200 rounded-xl mx-2 text-black font-serif font-extrabold">Logout</button>
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