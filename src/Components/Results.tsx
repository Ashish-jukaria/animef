import { useLocation } from "react-router-dom"

export const Results =()=>{
    const location=useLocation()
    const data=location.state.data||[]
    return (
        <>
        <div className="flex flex-col w-full items-center justify-center text-center m-4">
            <h1 className="text-2xl font-bold">Search Results</h1>
        
            <ul className="m-4">
                {data && data.length > 0 ? (
                    data.map((item: any, index: number) => (
                        <div className="m-4 bg-purple-100 hover:bg-purple-400">

                      
                        <li key={item.id}>
                            <h2>{item.title.english || item.title.romaji || item.title.native}</h2>
                            <p>Genres: {item.genres.join(", ")}</p>
                        </li>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </ul>
        </div>
        </>
    )
}