// import { createElement as cE } from "react";
import React from "react";
import  ReactDOM  from "react-dom/client";
// let e1=cE("div",{},"sachin");
let e1=React.createElement("div",{},"sachin");

let root = ReactDOM.createRoot(document.getElementById("root"))
let myElement1=React.createElement('h2',{id:"my_head",className:"cls",key:"1"},"hello react again");
let myElement2=React.createElement('h2',{id:"my",className:"cls",key:"2"},"completely fine1"); 
let myElement3=React.createElement('h2',{id:"myi",className:"cls",key:"3"},"completely fine2"); 
let myElement4=<h2>sachin</h2> ;
let myElement5=(
<div id="sachin" className="" >
    <h2>chandan</h2>
    <br/>
</div>
)

let myele =(a)=>{
    return (
    <div id="sachin" className="" >
        <h2>{a}</h2>
        <br/>
    </div>
    )
}




let div1= React.createElement("div",{},[myElement1,myElement2,myElement3,myElement4,myElement5,myele("hello boyes"),myele("hello boyes2")]);

root.render(div1);
