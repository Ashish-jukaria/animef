
import { useRef } from "react"
import { useAuth } from "./useAuth"


export const Login =()=>{
    const auth =useAuth()
    const username=useRef<HTMLInputElement|null>(null)
    const password=useRef<HTMLInputElement|null>(null)
    function handleSubmit(){
     
        if (username.current && password.current){
            auth.loginUser({
                username:username.current.value,
                password:password.current.value
            })

            
        }
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center my-80 w-full">
         
            
                <input className='m-2 p-2 bg-slate-300 w-1/4 ' ref={username} type="text" placeholder="Enter your email" />
                <input className="m-2 p-2 bg-slate-300 w-1/4"  ref={password} type="password" placeholder="Enter your password" />
                <button className="m-2 p-2 px-20 bg-cyan-200 hover:bg-slate-600 hover:text-white" onClick={handleSubmit}>Login</button>
            
        </div>
        </>
    )
}