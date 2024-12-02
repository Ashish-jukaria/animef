export const RecommendData =({item}:any)=>{
    return (
        <>

    <div className="flex flex-col my-5 justify-center w-full items-center bg-purple-100 p-4 hover:bg-purple-300" key={item.id}>
      <div>
      <h3>English : {item.title.english}</h3>  
        </div>
      <p> Romanji : {item.title.romaji}</p>    
      <p> Native : {item.title.native}</p>   
      <div>
        <strong>Genres:</strong>
        <ul>
          {item.genres.map((genre:any, index:any) => (
            <li key={index}>{genre}</li> 
          ))}
        </ul>
      </div>
    </div>
        </>
    )
}