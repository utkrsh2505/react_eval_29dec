import React from "react";
import {fetchItems} from "../Components/fetchItems";
import { useEffect,useState }  from "react";
const Home = ()=>{
    const [val,setVal] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setIsError] = useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetchItems()
        .then((res)=>{
            console.log(res.data);
            setVal(res.data)
        })
        .catch((err)=>{
            setIsError(true)
            console.log("err")
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[])
    return(
        <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"Wrap",width:"900px",margin:"auto"}}>
{val.map((prod)=>(
<div key={prod.id} style={{display:"flex",justifyContent:"left", alignItems:"center",width:"400px",border:"1px solid black",margin:"20px"}}>
    <img src={prod.image} style={{width:"150px",height:"150px"}}/>
    <div>
    <div>
        Name : {prod.name}</div>
      <div> Price : {prod.price}

    </div>
    <button style={{color:"white",backgroundColor:"black",borderRadius:"10px"}}>Add to cart</button>
    </div>
</div>
))}
</div>
        </>
    )
}
export {Home};