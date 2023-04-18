import { useEffect } from "react";
import { IMAGE_URL } from "../constant"
import { API_URL } from "../constant"

module.exports.SingleCardComponent = (props) => {

    let my_name;
    console.log("chala")


     async function my_func(){

        await fetch(`https://api.github.com/users/ckgit52`)
        .then(res=>res.json())
        .then((data)=>{
            
            data_we_got=data;
            my_name=data_we_got.name;
            console.log(my_name)

            console.log(data_we_got);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    my_func();




    return (

        <>
            <button onClick={my_func}>click me</button>

            <h1>i am chandan</h1>
        </>

    )

}
