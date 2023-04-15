module.exports.Sigle_note=(props)=>{
    console.log(props)
    return (
        <React.Fragment>
            <div className="bg-black my-2 p-3 rounded-xl flex flex-col  text-white">
                <p1>topic is :{props.title}</p1>
                <p1>description is : {props.description}</p1>
                <button className="mt-2 text-black font-serif font-extrabold rounded-xl bg-green-200 w-28 inline">delete this</button>
            </div>
        </React.Fragment>
    )
}