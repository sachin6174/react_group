import {useState ,useEffect} from "react"
import { useActionData, useParams } from "react-router-dom";
import { API_URL_MENU } from "../Constants/Constants";
import { IMAGE_URL } from "../Constants/Constants";
import Shimmer from "./Shimmer";
let FoodMenu = (props) => {

    let [menuCardList,setMenuCardList] =useState(null)
    const [foods,setFoods]=useState(0);

    const [total,setTotal]=useState(0);

    const [arr,setArr]=useState([]);


    
    
    const totalCost=()=>{
      alert(`total to be payed is ${total}` );
    }


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
             {/* <h1 className="mx-4 text-2xl font-bold font-serif">Res Id is {resturantId }</h1> */}
             <div className="flex justify-between items-center">
              <h2 className="mx-4 text-2xl font-bold font-serif">Avalable Menu is:- </h2>
              <div className="flex items-center">
                    <img onClick={totalCost} className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinE0XGiL81FDDx1pv3E9ZHFtygIVyQcXRaXNDRjgmN01y8itvplO6kCkb6I3_i3BYDlU&usqp=CAU" />
                    <h1 className="text-3xl font-extrabold mr-1">{foods}</h1>
              </div>
              
             </div>
             
             <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-3 gap-2">
               {menuCardList?.map((item, index) => {
                 return (
                   <li key={index} className="even:bg-green-400 odd:bg-green-600 rounded-md p-2 ">
                    <div >
                      <img src={IMAGE_URL+item?.card?.info?.imageId} alt="food" />
                      <p className="h-10 font-bold">{item?.card?.info?.name}</p>
                     
                      <p><strong>{Number((item?.card?.info?.price) / 100)}</strong> Rupees</p>
                      
                      <div>
                          <button className="bg-blue-600 font-bold px-1 rounded-md" onClick={()=>{
                            setFoods(foods+1);
                            
                            setTotal(total+Number((item?.card?.info?.price) / 100))
                            // {console.log(total)}
                          }}>ORDER</button>
                          
                          <button className="bg-blue-600 font-extrabold  mx-1 px-1 rounded-md " onClick={()=>{
                            if(foods>0){
                              setFoods(foods-1);
                              setTotal(total-Number((item?.card?.info?.price) / 100))
                            }
                            
                            // {console.log(total)}
                          }}>-</button>
                      </div>
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