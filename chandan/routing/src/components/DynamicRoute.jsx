import { useParams } from "react-router-dom";

let DynamicRoute=()=>{

    let my_parimeter=useParams();
    console.log(my_parimeter);

    return (
        <>
        <h1>DynamicRoute i am {my_parimeter.name}</h1>
        </>
    )
}

export default DynamicRoute;
