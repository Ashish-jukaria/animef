import { createContext, useState } from "react"
import { base_url } from "./Context"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const AuthContext = createContext<any>(null)
export const AuthContextProvider =({ children }:any)=>{
    const [token,setToken]=useState(localStorage.getItem('token')||'')
    const navigate=useNavigate()
        
    const loginUser=async(data:any)=>{
        const response=await axios.post(`${base_url}/auth/login/`,data)
        if (response.status==200){
            localStorage.setItem('token',response.data.access)
            setToken(response.data.access)
            navigate('/dashboard')
        }

    }

    const logout=()=>{
        localStorage.removeItem('token')
        setToken('')
        navigate('/login')
    }

    

    return(
        <AuthContext.Provider value={{token,loginUser,logout}}>
            { children }
        </AuthContext.Provider>
    )
}