import React from "react"
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
        <div className="card">
            
            
            <img src={IMAGE_URL+props.my_card.data.data.cloudinaryImageId} alt="food" />
            <h1>{props.my_card.data.data.name}</h1>
            <h2>{props.my_card.data.data.area}</h2>
            
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
            return (
                <div className="my-list ">
                    <SingleCardComponent my_card={card_arr[0]} />
                    <SingleCardComponent my_card={card_arr[1]}/>
                    <SingleCardComponent my_card={card_arr[2]}/>
                    <SingleCardComponent my_card={card_arr[3]}/>
                    <SingleCardComponent my_card={card_arr[4]} />
                    <SingleCardComponent my_card={card_arr[5]}/>
                    <SingleCardComponent my_card={card_arr[6]}/>
                    <SingleCardComponent my_card={card_arr[7]}/>
                    <SingleCardComponent my_card={card_arr[8]} />
                    <SingleCardComponent my_card={card_arr[9]}/>
                    <SingleCardComponent my_card={card_arr[10]}/>
                    <SingleCardComponent my_card={card_arr[11]}/>
                    <SingleCardComponent my_card={card_arr[12]} />
                    <SingleCardComponent my_card={card_arr[13]}/>
                    <SingleCardComponent my_card={card_arr[14]}/>
                    <SingleCardComponent my_card={card_arr[15]}/>
        
                </div>
            )
        }

        AppLayoutComponent=()=>{

            return (
                <>
                    <CardListComponent />
                </>
            )
        }
        

        root.render(<AppLayoutComponent />)

        
      
}

inOrder();

// let CardListComponent = () => {
//     console.log("ye chala")
//     return (
//         <div>
//             <SingleCardComponent my_card={card_arr[0]} />
//             <SingleCardComponent my_card={card_arr[1]}/>
//             <SingleCardComponent />
//             <SingleCardComponent />

//         </div>
//     )
// }




// let AppLayoutComponent = () => {
//     // console.log(fetched_data);
//     return (
//         <>
//             {/* <div>
//                 {fetched_data}
//             </div> */}
//             <h1>hiii</h1>
            
            
//         </>
//     )
// }



