import React from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

let header = React.createElement('h1', { key: "header" }, "welcome to my website");

let ul = (arg) => {

    return (
        <li key="arg">{arg}</li>
    )
}


let footer = React.createElement('footer', { key: "footer" }, ["copy-right @chandan 2023", React.createElement('p', { key: "footer_para" }, "this is made by chandan")])


let div = React.createElement('div', { key: "structure" }, [header, ul("home"), ul("about"), ul("support"), footer]);

// root.render(div);

let mysite = () => {
    return (
     <div>
        <h1>welcome to my website</h1>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>support</li>
        </ul>
        <footer>
            <p>copy-right @chandan 2023this is made by chandan</p>
        </footer>
     </div>

    )
}

root.render(mysite());
