import ReactDOM from "react-dom/client";
import { AppLayoutComponent } from "./components/appLayout";
let doInOrder = async () => {
  await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.71131414857127&lng=76.73191398382187&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    let loading_css= document.getElementById("loading_css");
    loading_css.remove()
    
    let root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayoutComponent />);
}
doInOrder()

