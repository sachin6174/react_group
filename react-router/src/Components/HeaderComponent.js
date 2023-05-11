let Header = ()=>{

    let filter_res = () => {
        let n = card_arr.length;
        for (let i = 0; i < n; i++) {
            let shop = card_arr[i].data.data.name;
            let searched_shop = document.getElementById("search-txt").value.toLowerCase();
            if (shop.toLowerCase().includes(searched_shop)) {
                specific_shops.push(card_arr[i]);
            }
        }
        setapiData(specific_shops);
    }
    
    return (
        <div className="bg-black text-white flex justify-between">
            <div className="flex gap-3">
                <h1 className="bg-black text-2xl font-extrabold text-white font-serif">Chandan Foods</h1>
                <h1 id="to-change" className="bg-black text-2xl font-extrabold text-white font-serif "><span className="text-green-500 font-extrabold"></span></h1>
            </div>
            <div className="flex gap-2">
                <input id="search-txt" className="bg-green-200 rounded-xl text-black px-2" name="search" type="text" />
                <button className="bg-gray-400 rounded-xl px-2 text-red-800 font-extrabold mr-2" onClick={() => {
                    filter_res();
                }}>Search</button>
            </div>
        </div>
    )
}  

export default Header