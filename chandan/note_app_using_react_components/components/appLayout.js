import { HeaderComponent } from "./header"
import  {BodyComponent} from "./body"
import { FooterComponent } from "./footer"

module.exports.AppLayoutComponent =()=>{   
        return(
            <>
                <HeaderComponent user_name="Chan52"/>
                < BodyComponent/>
                <FooterComponent/>
           </>
        )
    }
