import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./useAuth"

export const ProtectedRoute =()=>{
    const auth=useAuth()

    if (auth.token){
        return <Outlet />

    }
    else{
        return <Navigate to="/login" />
    }
}