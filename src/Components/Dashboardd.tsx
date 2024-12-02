import axios from "axios"
import { useEffect, useState } from "react"
import { base_url } from "./Context"
import { Link } from "react-router-dom"
import { RecommendData } from "./RecommendData"

export const Dashboard=()=>{
    const [data,setData]=useState([])
    const [status,setStatus]=useState(false)
    async function getSuggestion(){
        const token = localStorage.getItem("token");
        const response=await axios.post(`${base_url}/anime/recommendations/`,{},
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Send token in the Authorization header
                },

        })
        console.log(response)
        if (response.status==200){
            
            setData(response.data.data.Page.media)
            setStatus(true)
        }
    }
    useEffect(
        ()=>{
            getSuggestion()
            
        },[]
    )
    return (
        <>
        <div className="flex flex-col items-center">

       
        <div className="m-5 font-bold text-2xl" >
            Welcome to Dashboard
       </div>
       <div className="bg-red-300 p-4 hover:bg-red-500">
        <Link to='/prefrence'>Select Your Prefrence</Link>
       </div>
       <div>
       {status && data.map((item:any) => (
          <RecommendData key={item.id} item={item} />  
        ))}
      
        {!status && <h1>You Have not Selected Your Prefrence ,If you want to get recommendations select prefrence</h1>}
       </div>
       </div>
        </>
    )
}