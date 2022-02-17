import { fetchReviews } from "services/films-api"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { TitleOr, Content } from "./Reviews.styled";

export default function Reviews (){
    const [revInfo, setRevInfo] = useState([])
    const {movId} = useParams();
    console.log(useParams())

    useEffect(()=>{
        async function getFilmReviews(){
            const item = await fetchReviews(movId)
            console.log([item.results])
            setRevInfo(item.results)
            
        }
        getFilmReviews()
    }, [movId])


    return(
        <>
        <ul>
    {revInfo.map(({id, author, content}) => (
        <li key={id}>
            <TitleOr>Автор: {author}</TitleOr>
            <Content>{content}</Content>
        </li>
    ))}
        </ul>
        </>
    )
}