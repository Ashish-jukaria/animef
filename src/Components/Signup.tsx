import axios from "axios"
import { useRef } from "react"
import { base_url } from "./Context"
import { useNavigate } from "react-router-dom"

export const Signup =()=>{
    const navigate=useNavigate()
    const username=useRef<HTMLInputElement|null>(null)
    const password=useRef<HTMLInputElement|null>(null)
    async function handleClick(){
        if(username.current && password.current){
            const response=await axios.post(`${base_url}/auth/register/`,{
                username:username.current.value,
                password:password.current.value
            })
            if (response.status==201){
                navigate('/login')
            }
        }
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center my-80 w-full">
            <input  className='m-2 p-2 bg-slate-300 w-1/4 ' ref={username} type="text" placeholder="Enter your name" />
            <input  className='m-2 p-2 bg-slate-300 w-1/4 ' ref={password} type="password" placeholder="Enter your password" />
            <button className="m-2 p-2 px-20 bg-cyan-200 hover:bg-slate-600 hover:text-white" onClick={handleClick}>Signup</button>
        </div>
        </>
    )
}