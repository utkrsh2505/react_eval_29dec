import React from "react";
import {Link} from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
        <div style={{border:"1px solid black",fontSize:"30px",padding:"10px",color:"white",backgroundColor:"black"}}>
<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
</div>
    </>
    )
}
export default Navbar;