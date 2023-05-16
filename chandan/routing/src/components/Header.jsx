import { Link } from "react-router-dom";
let Header=()=>{
    let userName="sachin"
    return (
        <>
        <h1>Header i am</h1>
        <Link to="about" > About</Link>
        <Link to="support" > Support</Link>
        <Link to={"user/"+userName}> Dynamic route</Link>


        </>
    )
}

export default Header;