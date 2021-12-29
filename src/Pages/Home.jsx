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

        </>
    )
}
export {Home};