import { useParams} from "react-router-dom";
import { fetchVideos } from "services/films-api";
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player/youtube'
import { Container,LiTrailers} from "./Trailers.styled";


export default function Trailers(){
    const [trailer, setTrailer] = useState([]);
    const {movId} = useParams();
    const lang = 'ru'
    
    useEffect(()=>{
        async function getFilmById(){
            const item = await fetchVideos(movId, lang)
            setTrailer(item)
            
        }
        getFilmById()
    }, [movId])
  
    

    return(
       
   
<Container >
 {(trailer.length > 0)?( trailer.map(({id, key}) => (
     <LiTrailers key={id}>
    <ReactPlayer  playing={false} controls={true} url={`https://www.youtube.com/watch?v=${key}`} />
    </LiTrailers>
 ))) : <h2 style={{color: 'red', margin: 0}}>Пока нет трейлеров...</h2>}
 
</Container>

    )
}
