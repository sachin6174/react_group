import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));


let ul1 = React.createElement('li', {
    className: "list",
    key: "1"
},"home")
    

let ul2 = React.createElement('li', {
    className: "list",
    key: "2"
},"about")

let ul3 = React.createElement('li', {
    className: "list",
    key: "3"
},"support")


let ul=React.createElement('ul',{className:"our_list",key:"listing"},[ul1,ul2,ul3]);




let header=React.createElement('header',{className:"header",key:"our_header"},[React.createElement('h1',{key:"heading"},"my-heading"), ul]);


let footer=React.createElement('footer',{key:"footer"},[React.createElement('p',{key:"footer_para"},"copy-right @ chandan 2023")])


let div=React.createElement('div',{key:"structure"},[header,footer]);


root.render(div);
    
    




/*
HEADER--
    h1
    ul
        home
        about
        support
FOOTER
    p--->(copy at the rate  chandan)


*/




