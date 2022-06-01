import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(URL){

    const [data, setdata] = useState(null);
    const [loading , setloading] = useState(false);
    const [error, seterror]  =useState(null);

    useEffect(()=>{
        setloading(true);
        axios.get(URL)
        .then((res)=>{
            console.log(res.data);
            setdata(res.data.image_link);
        })
        .catch((err)=> {
            console.log(err);
            seterror(err);
        })
        .finally(()=>{
            console.log("call completed");
            setloading(false);
        });
    
    
    }, [URL]);
    
    return {data, loading, error};

}

export default useFetch;