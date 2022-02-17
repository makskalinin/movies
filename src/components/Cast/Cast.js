import { fetchCredits } from "services/films-api"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Ul, Li, Img,Title, Span,TitleOrange } from "./Cast.styled";

export default function Cast (){
    const [actors, setActors] = useState([])
    const {movId} = useParams();

    useEffect(()=>{
        async function getFilmActors(){
            const item = await fetchCredits(movId)
            console.log([item.cast])
            setActors(item.cast)
            
        }
        getFilmActors()
    }, [movId])


    return(
        <Ul>
    {actors.map(({character, id, name, profile_path}) =>(
        <Li key={id}>
            <Img src={`https://www.themoviedb.org/t/p/w500/${profile_path}`} alt="" />
            <Title>{name}</Title>
            <TitleOrange>Персонаж: <Span>{character}</Span></TitleOrange>
        </Li>
    ) )}

        </Ul>
    )
}