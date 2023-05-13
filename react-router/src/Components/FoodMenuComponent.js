import {useState ,UserEffect} from "react"

let FoodMenu = (props) => {
    let [menu, setMenu] =useState("")

    // useEffect(()=>{

    // },[])

    return (
       <div>
            <button>HideMenu</button>
            <ul>
                <li>Dal</li>
                <li>Bhat</li>
                <li>Chokha</li>
            </ul>
       </div>
    )
}

export default FoodMenu;