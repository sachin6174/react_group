import {useState ,useEffect} from "react"
import { useActionData, useParams } from "react-router-dom";
import { API_URL_MENU } from "../Constants/Constants";
let FoodMenu = (props) => {

    let [menuCardList,setMenuCardList] =useState([])


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
    
    if (menuCardList.length===0){
        return (
          <div>
            <h1>Res Id is {resturantId}</h1>
            <h2>Avalable Menu is:- </h2>
            <div>Loding menu card ..........</div>
            
          </div>
        );
    }else{
         return (
           <div>
             <h1>Res Id is {resturantId}</h1>
             <h2>Avalable Menu is:- </h2>
             <ul>
               {menuCardList.map((item, index) => {
                 return (
                   <li key={index}>
                     <span>{item?.card?.info?.name}</span> ==========
                     <span>{Number(item?.card?.info?.price) / 100}Rupees</span>
                   </li>
                 );
               })}
             </ul>
           </div>
         );
    }
     
}

export default FoodMenu;