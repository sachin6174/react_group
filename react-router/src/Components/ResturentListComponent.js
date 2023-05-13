import { useEffect,useState } from "react";
import SingleResturentCard from "./SingleResturentCard"
import Shimmer from "./ShimmerComponent.js"
import {API_URL} from "../Constants/Constants"
import Logo from "../assets/images/ChandanFoodsLogo.png"

let ResturantList = () => {
    console.log("ResturantListComponent rendered")

    let [apiData, setapiData] = useState(null);
    let [filteredData,setFilteredData] =useState(null);

    let [searchedRes,setSearchedRes] =useState("");

    let specific_shops=[]
    
    useEffect(()=>{
        console.log("use effect called")
        fetch(API_URL)
        .then((response) => response.json())
        .then((recivedData) => {
            console.log(recivedData.data.cards)
            setapiData(recivedData.data.cards)
            setFilteredData(recivedData.data.cards)
        })
        .catch((error) => console.error(error));
    },[])

    let filter_res = (searched_shop) => {
        let lowerSearchStr = searched_shop.toLowerCase();
        let n = apiData.length;
        for (let i = 0; i < n; i++) {
            let shop = apiData[i].data.data.name;
            if (shop.toLowerCase().includes(lowerSearchStr)) {
                specific_shops.push(apiData[i]);
            }
        }
        setFilteredData(specific_shops);
    }

    if(apiData===null){
        return(<Shimmer/>)
    }else{
        return (
            <>
                <div className="bg-black text-white flex justify-between">
                    <div className="flex gap-3">
                        <img className="h-12 m-2 border-solid border-red-400 border-2 rounded-full" src={Logo} alt ="AppLogo"/>
                        <h1 className="bg-black mt-4 text-2xl font-extrabold text-white font-serif">Chandan Foods</h1>
                        <h1 id="to-change" className="bg-black text-2xl font-extrabold text-white font-serif "><span className="text-green-500 font-extrabold"></span></h1>
                    </div>
                    <div className="flex gap-2">
                        <input id="search-txt" className="bg-green-200  m-2 rounded-xl text-black px-2 w-64" name="search" type="text" onChange={(e)=>{
                            setSearchedRes(e.target.value)
                        }}/>
                        <button className="bg-gray-400 m-2 rounded-xl px-2 text-red-800 font-extrabold mr-2" onClick={()=>{
                            filter_res(searchedRes)
                        }}>Search</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-3 gap-2 bg-white text-black rounded-md">
                        {
                        filteredData.map((item,index) => {
                                return (
                                    <SingleResturentCard  key={index} resturantList={filteredData[index]}/>
                                )
                            })
                        }
                </div>
            </>
            
        )
    }
    
}

export default ResturantList;