

// const React =require("react");
// const ReactDOM =require("react-dom/client");
// const Header =  require("./components/header.js");
// const Body =  require("./components/body.js");
// const Footer =  require("./components/footer.js");

import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

import { Sigle_note } from "./components/singleNote"
import {Notes} from "./components/notesList";

let Layout =()=>{

    const addbtn=document.getElementById('add_btn');

    const add_ele=()=>{

        return Sigle_note();
    }


let arr=[1,2,3,4,5];
    
    return(
        <div>
            <Header/>
           
            
            <Sigle_note />
             
            <Notes/>

            
            <div className="bg-black text-white px-2 rounded-xl">

                LIKE WE DONE WITH ARRAY WE CAN MAKE ARRAY OF AN OBJECT OF KEY:topic and desc AND THAN WE CAN MAKE AS FOLLOWING WE DONNED WITH ARRAY -->
            </div> 

            <div>
                <div className="">
                    {arr.map((num)=>(
                        <div className="bg-black text-white px-2 mt-2 rounded-xl">
                            {num}
                        </div>
                    ))}
                </div>
                
            </div>


            <Footer className="bg-red-600"/>
            
           
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Layout/>)
