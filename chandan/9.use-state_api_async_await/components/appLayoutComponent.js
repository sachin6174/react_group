import { CardListComponent } from "./cardListComponent";

import {fetched_data} from './cardListComponent'
module.exports.AppLayoutComponent=()=>{
    console.log(fetched_data);
    return (
        <>
        <div>
            {fetched_data}
        </div>
            <CardListComponent/>
        </>
    )
}

