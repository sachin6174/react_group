import { IMAGE_URL } from "../Constants/Constants"

let SingleResturentCard = (props) => {
    return (
        <div className="">
            <div className="h-70 w-70  m-2 border-solid border-2 border-black">
                <img src={IMAGE_URL + props.resturantList.data.data.cloudinaryImageId} alt="food" />
                <div className="bg-gray-300 px-2 w-70 h-30 p-3 ">
                    <p className="w-full h-14 ">{props.resturantList.data.data.name}</p>
                    <p>{props.resturantList.data.data.area}</p>
                    <p>{props.resturantList.data.data.id}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleResturentCard;