import { Link } from "react-router-dom";
import Logo from "../assets/images/ChandanFoodsLogo.png";
import cklogo from "../assets/images/ChandanFoodsLogo.png";

import Login_page from "./Login-page";

let Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-800 text-white flex justify-between sticky top-0 min-w-fit">
      <div className="flex gap-3 ">
        <Link to="/">
          <img
            className="h-8 w-8 m-1 border-solid border-red-400 border-2 rounded-full"
            src={cklogo}
            alt="AppLogo"
          />
        </Link>

        <Link to="/">
          <h1 className="hidden sm:block bg-gradient-to-l from-blue-500 to-orange-800 mt-1 text-2xl font-extrabold text-white font-serif rounded-md px-1">
            Sachin Foods
          </h1>
        </Link>
      </div>
      <div className="flex gap-2">
        <div>
          <div className="flex justify-between">
            <Link className="p-3" to="/about">
              About
            </Link>
            <Link className="p-3" to="/contact">
              Contact
            </Link>
            <Link className="p-3" to="/support">
              Support
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center">
        <span className="  m-1  text-white px-2">
          Hello {localStorage.getItem("chandan")}
        </span>
        <button className="bg-gray-400 m-1 rounded-xl px-2 text-red-800 font-extrabold mr-2">
          <Link to="login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
