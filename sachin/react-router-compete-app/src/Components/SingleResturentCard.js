import { IMAGE_URL } from "../Constants/Constants"
import { Link } from "react-router-dom";
let SingleResturentCard = (props) => {
    let resPageUrl=`resturant/${props?.resturantList?.data?.data?.id}`
    return (
      <Link to={resPageUrl}>
        <div className="h-70 w-70  m-2 border-solid border-2 border-black">
          <img
            src={IMAGE_URL + props.resturantList.data.data.cloudinaryImageId}
            alt="food_resturent"
          />
          <div className="bg-gray-300 px-2 w-70 h-30 p-3 border-solid border-2  border-sky-500">
            <p className="w-full h-14 ">{props.resturantList.data.data.name}</p>
            <p>Address: {props?.resturantList?.data?.data?.area}</p>
            <p>Res Id: {props?.resturantList?.data?.data?.id}</p>
            <p>
              Rating: {props?.resturantList?.data?.data?.avgRating} &#11088;
            </p>
          </div>
        </div>
      </Link>
    );
}

export default SingleResturentCard;