import { IMAGE_URL } from "../constant"
module.exports.SingleCardComponent=(props)=>{
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