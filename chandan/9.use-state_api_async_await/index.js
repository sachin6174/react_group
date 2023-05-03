import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { API_URL } from "./constant"
import { IMAGE_URL } from "./constant"

// import { AppLayoutComponent } from "./components/appLayoutComponent"
// import cardListComponent from "./components/cardListComponent"

let root = ReactDOM.createRoot(document.getElementById("root"))




let SingleCardComponent = (props) => {
    // console.log(props.my_card)
    // let cuisineString= props.data.cards.data.data.cuisines.join(",")
    return (
        <div className="">

            <div className="h-40 w-40 rounded-md m-2 ">
                <img src={IMAGE_URL + props.my_card.data.data.cloudinaryImageId} alt="food" />
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
            card_arr = fetched_data.data.cards;

        })
        .catch((error) => console.error(error));
    CardListComponent = () => {

        let [onchangevar, setOnchangevar] = useState("chandan");

        let [newarr, setNewarr] = useState(card_arr);

        let specific_shops = [];

        // useEffect(() => {
        //     let n = card_arr.length;

        //     for (let i = 0; i < n; i++) {
        //         let shop = card_arr[i].data.data.name;

        //         let w=document.getElementById("search-txt").value;

        //         console.log(shop,typeof(shop));
        //         console.log(w,"w");

        //         if (shop.includes("p")) {
        //             specific_shops.push(card_arr[i]);

        //         }


        //     }

        //     setNewarr(specific_shops);


        // }, [])



        let filter_res = () => {
            let n = card_arr.length;

            for (let i = 0; i < n; i++) {
                let shop = card_arr[i].data.data.name;

                let w = document.getElementById("search-txt").value.toLowerCase();

                if (shop.toLowerCase().includes(w)) {
                    specific_shops.push(card_arr[i]);

                }


            }

            setNewarr(specific_shops);

            setNewarr(specific_shops);
        }





        return (

            <>
                <div className="bg-black text-white flex justify-between">

                    <div className="flex gap-3">
                        <h1 className="bg-black text-2xl font-extrabold text-white font-serif">my-dhabas foods</h1>
                        <h1 id="to-change" className="bg-black text-2xl font-extrabold text-white font-serif "><span className="text-green-500 font-extrabold">{onchangevar}</span></h1>

                    </div>


                    <div className="flex gap-2">

                        <input onChange={function () {

                            setOnchangevar(document.getElementById("search-txt").value)



                        }} id="search-txt" className="bg-green-200 rounded-xl text-black px-2" name="search" type="text" />
                        <button className="bg-gray-400 rounded-xl px-2 text-red-800 font-extrabold mr-2" onClick={() => {

                            // let n = card_arr.length;

                            // for (let i = 0; i < n; i++) {
                            //     let shop = card_arr[i].data.data.name;

                            //     let w = document.getElementById("search-txt").value.toLowerCase();

                            //     if (shop.toLowerCase().includes(w)) {
                            //         specific_shops.push(card_arr[i]);

                            //     }


                            // }

                            // setNewarr(specific_shops);
                            filter_res();

                        }}>Search</button>

                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-white text-black rounded-md">

                    {
                        newarr.map((keys, index) => {
                            return (
                                <SingleCardComponent key={keys} my_card={newarr[index]} />
                            )
                        })
                    }


                </div>
            </>
        )
    }


    root.render(<CardListComponent />)



}

inOrder();
