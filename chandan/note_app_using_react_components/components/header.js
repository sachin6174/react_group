
module.exports.HeaderComponent=(props)=>{
        return (
            <header  className="header">
                <div  className ="left">
                    <img class ="logo" src="https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/abae37aa-df56-47e8-91fd-8b85ad85cba0/icon/935e4a06-3986-4186-8a7e-3bf429ac079e" alt="Notes Logo"/>
                    <span>Notes App</span>
                </div>
                <div>
                    <label  htmlFor="topic">Topic:</label>
                    <input placeholder="enter-topic" name="topic" type="text"/>
                    <label   className="lbl " htmlFor="desc">Description:</label>
                    <input placeholder="enter-desc"  name="desc" type="text"/>
                    <button className="btn" >Add</button>
                    <button className="btn" >Clear Notes</button>
                </div>
                <div className ="right">
                    <span >{`Hi ${props.user_name}`}</span>
                    <button className="btn" >Logout</button>
                </div>
            </header>
        )
    }