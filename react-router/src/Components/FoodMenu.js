import {useState ,UserEffect} from "react"
import { useParams } from "react-router-dom";
let FoodMenu = (props) => {
    let [menu, setMenu] =useState("")

    // useEffect(()=>{

    // },[])
    const { resturantId } = useParams();

    return (
      <div>
        <h1>Res Id is:{resturantId}</h1>
        <button>HideMenu</button>
        <ul>
          <li>Dal</li>
          <li>Bhat</li>
          <li>Chokha</li>
        </ul>
      </div>
    );
}

export default FoodMenu;