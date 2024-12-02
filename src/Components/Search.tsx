import axios from 'axios';
import { base_url } from './Context';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search=()=>{
    const navigate=useNavigate()
    const genre_data=[
        {id:1,name:"Action"},
        {id:2,name:"Comedy"},
        {id:3,name:"Drama"},
        {id:4,name:"Horror"},
        {id:5,name:"Romance"},
        {id:6,name:"Thriller"},
        {id:7,name:"Mystery"},
        {id:8,name:"Sci-Fi"},
        {id:9,name:"Fantasy"},
        {id:10,name:"Documentary"},
        ]

    let genre:string|null=null
    
    const [data,setData]=useState('')
    console.log(data)
    async function getdata(search:string){
        genre_data.map((gen)=>{
            if(gen.name.toLowerCase().includes(search.toLowerCase())){
                genre=gen.name
            }
            
    })

    const request_body:any={search}

    if (genre){
        request_body.genre=genre
    }

        const response:any=await axios.post(`${base_url}/anime/search/`,request_body)
        console.log(response.data)
        setData(response.data.data.Page.media)
        navigate('/result', { state: { data: response.data.data.Page.media } });
        
    }
    const ref=useRef<HTMLInputElement|null>(null)
    function handleClick(){
        if (ref.current){
            const search=ref.current.value
            getdata(search)
           
        }
       
    }
    return (
      
        <>
        <input className='bg-cyan-50 text-black mx-2 px-2' ref={ ref } type="text" placeholder="Search" />
        <button className='bg-cyan-500 text-black px-8 hover:bg-cyan-300' onClick={handleClick}>Search</button>
        </>
    )
}