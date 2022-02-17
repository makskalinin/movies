import { useParams, Route, Routes, useLocation } from "react-router-dom";
import { fetchMoviesId } from "services/films-api";
import { useState, useEffect } from "react";
import { Link, Wrapper, Li, Container,Title,Img, GanrLi,PRed,Span,DivRight,LinkBack, TitleInfo, DivYouTube} from "./Movies.styled";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import Trailers from "components/Trailers";
import {ImYoutube} from "react-icons/im";
import { GoArrowLeft } from "react-icons/go";


export default function Movies(){
    const location = useLocation()

    const [film, setFilm] = useState([]);
    const {movId} = useParams();
    useEffect(()=>{
        async function getFilmById(){
            const item = await fetchMoviesId(movId)
            console.log([item])
            setFilm([item])
            
        }
        getFilmById()
    }, [movId])
  
    return(
<div>
    <LinkBack to={location?.state?.from ?? '/home'}><GoArrowLeft size={24}/> Обратно к списку</LinkBack>
    {film.map(({id, title, poster_path,overview,genres, vote_average, release_date }) => (
    
    <div key={id}>
        <div>
            <Container>
        <DivRight>
        <Link to='trailer'>
            <DivYouTube>
                <ImYoutube size={80} color={'red'} />
            </DivYouTube>
        <Img src={`https://www.themoviedb.org/t/p/w500/${poster_path}`} alt=""/>     
        </Link>
        
        </DivRight>
       <div>
           <Title>{title} ({parseInt(release_date)})</Title>
           <PRed>Оценка: <Span>{vote_average}</Span></PRed>
           <PRed>Описание: <Span>{overview}</Span> </PRed>
           <PRed>Жанры:</PRed>
           <ul>
               {genres.map(gnr => <GanrLi key={gnr.id}>{gnr.name}</GanrLi>)}
           </ul>
       </div>
       
       </Container>
       </div>
       <hr/>
           <TitleInfo>Дополнительная информация</TitleInfo>
           <Wrapper>
            <Li><Link to='cast' state={{from: location?.state?.from ?? '/'}}>Актеры </Link></Li>
            <Li><Link to='reviews' state={{from: location?.state?.from ?? '/'}}>Отзывы</Link></Li>
         </Wrapper>
       
       <div>
       <Routes>
         <Route path="cast" element={<Cast/>}/>
         <Route path="reviews" element={<Reviews/>}/>
         <Route path="trailer" element={<Trailers/>}/>
       </Routes>
       </div>
        </div>
        
        
        ))}
       
</div>

    )
}