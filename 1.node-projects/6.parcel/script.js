import React from "react"
import ReactDOM from "react-dom"

let myname ="sachin"
console.log(myname)
let root1=ReactDOM.createRoot(document.getElementById('root'));

let myElement1=React.createElement('h2',{id:"my_head",className:"cls"},"hello react again");
let myElement2=React.createElement('h2',{id:"my",className:"cls"},"completely fine1"); 
let myElement3=React.createElement('h2',{id:"myi",className:"cls"},"completely fine2"); 

let div1= React.createElement("div",{},[myElement1,myElement2,myElement3]);

root1.render(div1);