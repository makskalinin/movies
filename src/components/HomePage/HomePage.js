import { useState, useEffect } from "react";
import {fetchMovies} from 'services/films-api'
import { Img, Ul, Li,Title,LinkCard,Loader,TitleHome } from "./HomePage.styled";
import { MutatingDots } from  'react-loader-spinner'


export default function HomePage(){
const [movies, setMovies] = useState([]);
const [isLoad, setIsLoad] = useState(false);     
useEffect(()=> {
    async function fetchFilms(){
        setIsLoad(true)
        try {
          const item = await fetchMovies()
          setMovies(item)
          
        } catch (error) {
            
        }
        finally{
          setIsLoad(false)
        }
    }
    fetchFilms()
   
}, []);

   return(
     <>
     <TitleHome>Самые популярные фильмы недели:</TitleHome>
    {isLoad && <Loader>
      <MutatingDots ariaLabel="loading-indicator" color="red" secondaryColor="red" height={150} width={100} />
               </Loader>}
     <Ul>
     { movies.map(mov => (
     <Li key={mov.id}>
       <LinkCard to={`/movies/${mov.id}`}>
         <Title>{mov.title}</Title>
        <Img src={`https://www.themoviedb.org/t/p/w500/${mov.poster_path}`} alt="" />
       </LinkCard>
       </Li>))}
     </Ul>
     
     </>
   )
}