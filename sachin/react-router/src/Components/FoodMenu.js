import {useState ,useEffect} from "react"
import { useActionData, useParams } from "react-router-dom";
import { API_URL_MENU } from "../Constants/Constants";
import { IMAGE_URL } from "../Constants/Constants";
import Shimmer from "./Shimmer";
let FoodMenu = (props) => {

    let [menuCardList,setMenuCardList] =useState(null)


    const { resturantId } = useParams();
   
    console.log(resturantId);
    useEffect(()=>{
      fetch(API_URL_MENU + resturantId)
        .then((response) => response.json())
        .then((recivedData) => {
          //recivedData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
            setMenuCardList(
              recivedData.data.cards[2].groupedCard.cardGroupMap.REGULAR
                .cards[1].card.card.itemCards
            )
            console.log(
              recivedData.data.cards[2].groupedCard.cardGroupMap.REGULAR
                .cards[1].card.card.itemCards
            );
        })
        .catch((error) => console.error(error));
    },[])
    
    if (menuCardList === null){
        return (
          <div>
            
            <div  className="text-4xl font-extrabold">Loading menu card ..........</div>
            <Shimmer/>
          </div>
        );
    }else{
         return (
           <div>
             <h1 className="mx-4 text-2xl font-bold font-serif">Res Id is {resturantId }</h1>
             <h2 className="mx-4 text-2xl font-bold font-serif">Avalable Menu is:- </h2>
             <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-3 gap-2">
               {menuCardList?.map((item, index) => {
                 return (
                   <li key={index} className="even:bg-green-400 odd:bg-green-600 rounded-md p-2 ">
                    <div >
                      <img src={IMAGE_URL+item?.card?.info?.imageId} alt="food" />
                      <p className="h-10 font-bold">{item?.card?.info?.name}</p>
                      <p><strong>{Number(item?.card?.info?.price) / 100}</strong> Rupees</p>
                      <button className="bg-blue-600 font-bold px-1 rounded-md">ORDER</button>
                    </div>
                    
                   </li>
                 );
               })}
             </ul>
           </div>
         );
    }
}

export default FoodMenu;