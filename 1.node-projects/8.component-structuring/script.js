
// const React =require("react");
// const ReactDOM =require("react-dom/client");
// const Header =  require("./components/header.js");
// const Body =  require("./components/body.js");
// const Footer =  require("./components/footer.js");

import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Body } from "./components/body"

let Layout =()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Layout/>)
