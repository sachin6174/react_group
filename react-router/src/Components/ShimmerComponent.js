let Shimmer = (props) => {

    let sizeArray=[];
    for(let i=0;i<15;i++){
        sizeArray.push(i)
    }

    return (
        <div className="flex gap-2 flex-wrap">
        {
            sizeArray.map((item)=>{
                return(
                <div className="h-40 w-40 rounded-md m-2 bg-gray-400 animate-pulse" key={item}></div> 
                )
            })
        }
        </div>
    )
};

export default Shimmer;
