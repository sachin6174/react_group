// import ResturantList from "./ResturentList";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
let App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
