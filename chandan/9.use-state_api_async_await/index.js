import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { API_URL } from "./constant"
import { IMAGE_URL } from "./constant"

// import { AppLayoutComponent } from "./components/appLayoutComponent"
// import cardListComponent from "./components/cardListComponent"

let root = ReactDOM.createRoot(document.getElementById("root"))




let SingleCardComponent = (props) => {
    console.log(props.my_card)
    // let cuisineString= props.data.cards.data.data.cuisines.join(",")
    return (
        <div className="">

            <div className="h-40 w-40 rounded-md m-2 ">
                <img src={IMAGE_URL+props.my_card.data.data.cloudinaryImageId} alt="food" />
                <div className="bg-gray-300 px-2 w-40 h-16">

                <p>{props.my_card.data.data.name}</p>
                <p>{props.my_card.data.data.area}</p>
                </div>
            </div>
            
            
            
            
        </div>
    )
}


let fetched_data;

let card_arr;
let CardListComponent;
let AppLayoutComponent;
let inOrder = async () => {
    await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            fetched_data = data;
            card_arr=fetched_data.data.cards;
            console.log("chala")
             console.log(fetched_data);
        })
        .catch((error) => console.error(error));
        CardListComponent = () => {
            console.log("ye chala")
            let [onchangevar,setOnchangevar] = useState("chandan");
            return (
                
                <>
                <h1 className="bg-black text-2xl font-extrabold text-white font-serif">my-dhabas foods</h1>
                <h1 id ="to-change"className="bg-black text-2xl font-extrabold text-white font-serif">{onchangevar}</h1>
                <label htmlFor="search">search</label>
                <br></br>
                <input onChange={function(){
                    setOnchangevar(document.getElementById("search-txt").value)
                    console.log(onchangevar)
                }} id="search-txt" className="bg-green-200" name="search" type="text"/>
                <button >Search</button>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white text-black rounded-md">
                    <SingleCardComponent my_card={card_arr[1]} className=" "/>
                    <SingleCardComponent my_card={card_arr[2]} className=" "/>
                    <SingleCardComponent my_card={card_arr[3]} className=" "/>
                    <SingleCardComponent my_card={card_arr[0]} className=" " />
                    <SingleCardComponent my_card={card_arr[4]} className=" " />
                    <SingleCardComponent my_card={card_arr[5]} className=" "/>
                    <SingleCardComponent my_card={card_arr[6]} className=" "/>
                    <SingleCardComponent my_card={card_arr[7]} className=" "/>
                    <SingleCardComponent my_card={card_arr[8]} className=" " />
                    <SingleCardComponent my_card={card_arr[9]} className=" "/>
                    <SingleCardComponent my_card={card_arr[10]} className=" "/>
                    <SingleCardComponent my_card={card_arr[11]} className=" "/>
                    <SingleCardComponent my_card={card_arr[12]} className=" " />
                    <SingleCardComponent my_card={card_arr[13]} className=" "/>
                    <SingleCardComponent my_card={card_arr[14]} className=" "/>
                    <SingleCardComponent my_card={card_arr[15]} className=" "/>
        
                </div>
                </>
            )
        }

       
        root.render(<CardListComponent />)

        
      
}

inOrder();
