import {
  Link
} from "react-router-dom";
import Logo from "../assets/images/ChandanFoodsLogo.png";

let Header = () => {
  // return (
  //   <div className="bg-black text-white flex justify-between">
  //     <div className="flex gap-3">
  //       <h1 className="bg-black text-2xl font-extrabold text-white font-serif">
  //         Chandan Foods
  //       </h1>
  //       <h1
  //         id="to-change"
  //         className="bg-black text-2xl font-extrabold text-white font-serif "
  //       >
  //         <span className="text-green-500 font-extrabold"></span>
  //       </h1>
  //     </div>
  //     
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-black text-white flex justify-between">
      <div className="flex gap-3 ">
        <img
          className="h-8 m-1 border-solid border-red-400 border-2 rounded-full"
          src={Logo}
          alt="AppLogo"
        />
        <Link to="/">
          <h1 className="bg-black mt-1 text-2xl font-extrabold text-white font-serif">
            Chandan Foods
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
        <span className="  m-1  text-white px-2">Hello User</span>
        <button className="bg-gray-400 m-1 rounded-xl px-2 text-red-800 font-extrabold mr-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
