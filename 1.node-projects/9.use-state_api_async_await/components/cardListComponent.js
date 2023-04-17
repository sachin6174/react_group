// import { SingleCardComponent } from "./singleCardComponent";
import { API_URL, IMAGE_URL } from "../constant";
 import { IMAGE_URL } from "../constant" 


let  SingleCardComponent=(props)=>{
      console.log(props)
      // let cuisineString= props.data.cards.data.data.cuisines.join(",")
      return (
          <div className="card">
              sachin
              {/* props.data.cards.data.data.name
              props.data.cards.data.data.cloudinaryImageId
              props.data.cards.data.data.cuisines  --array
              props.data.cards.data.data.totalRatingsString */}
              {/* <img src={IMAGE_URL+props.data.cards.data.data.cloudinaryImageId} alt="food" />
              <h1>{props.data.cards.data.data.name}</h1>
              <h2>{props.data.cards.data.data.totalRatingsString}</h2>
              <h2>{cuisineString}</h2> */}
          </div>
      )
  }

let fetched_data;
let inOrder = async () => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      fetched_data = data;
    })
    .catch((error) => console.error(error));
  console.log(fetched_data);
  let card_arr = fetched_data.data.cards;
  console.log(card_arr)
  module.exports.CardListComponent = () => {
    return (
      <div>
        <SingleCardComponent  />
        {/* <SingleCardComponent card={card_arr[1]} />
        <SingleCardComponent card={card_arr[2]} />
        <SingleCardComponent card={card_arr[3]} /> */}
      </div>
    );
  };



}

inOrder();


