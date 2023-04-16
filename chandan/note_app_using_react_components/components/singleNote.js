module.exports.SingleNoteComponent =(props)=>{
        return (
    
            <div className="give-border">
                <p>topic is :{props.topic}</p>
                <p>description is :{props.desc}</p>
                <button >delete this</button>
            </div>
    
        )
    }