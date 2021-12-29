import React from "react";
import {Route}from "react-router-dom";
import {Home} from "../Pages/Home";
import { Cart } from "../Pages/Cart";
const Routes = ()=>{
    return(
        <>
<Route exact path="/"><Home/></Route>
<Route exact path="/cart"><Cart/></Route>
        </>
    )
}
export {Routes}