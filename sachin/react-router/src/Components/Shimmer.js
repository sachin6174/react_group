let Shimmer = (props) => {

    let sizeArray=[];
    for(let i=0;i<15;i++){
        sizeArray.push(i)
    }

    return (
        <>
        {/* <div className="  flex justify-between bg-gray-600 animate-pulse text-gray-600">
            <div className="flex gap-3">
                <h1 className=" text-2xl font-extrabold font-serif  bg-gray-400 animate-pulse text-gray-400 rounded-xl">Chandan Foods</h1>
                <h1 id="to-change" className=" text-2xl font-extrabold text-white font-serif "><span className="text-green-500 font-extrabold"></span></h1>
            </div>
            <div className="flex gap-2">
                <input id="search-txt" className="rounded-xl px-2 bg-gray-400 animate-pulse w-40" name="search" type="text" />
                <button className="bg-gray-400 rounded-xl px-2 text-gray-600 font-extrabold mr-2 w-20"></button>
            </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-3 gap-2 ">
        {
            sizeArray.map((item)=>{
                return(
                    <div key={item} className="p-32  m-2 bg-gray-600 animate-pulse text-gray-600 rounded-xl">
                    
                </div>
                    )
            })
        }
        </div>

        </>
    )
};

export default Shimmer;
