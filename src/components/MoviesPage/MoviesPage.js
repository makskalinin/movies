import { useState, useEffect} from "react"
import { searchFilms } from "services/films-api"
import { Img,Ul,Title,LinkCard,Li,Input,Form,Btn,Loader } from "./MoviesPage.styled";
import { MutatingDots } from  'react-loader-spinner'
import { useSearchParams, useLocation } from "react-router-dom";
import Button from "components/Button/Button";

export default function MoviesPage(){

const location = useLocation()
const [searchParams, setSearchParams] = useSearchParams()
const QUERY = searchParams.get('query')

// const [finalQuery, setFinalQuery] = useState('')
const [kino, setKino] = useState([])
const [page, setPage] = useState(1)
const [isLoad, setIsLoad] = useState(false);

useEffect(()=>{
    if (QUERY === null){
     return 
     }
        async function getSearchFilm(){
            setIsLoad(true)
            try{
                const item = await searchFilms(QUERY, page)
                if(item.results.length === 0){
                    alert('Введите корректное имя!')
                }else{
                    setKino(prevState => [...prevState, ...item.results])
                }
            }catch(error){
                
            }finally{
                setIsLoad(false)
            }
        }
        getSearchFilm()
    }, [page, QUERY])

    const loadMore = () => {
        setPage(prevState => prevState + 1)
         
    }
        

const submitForm = (e) => {
    e.preventDefault()
    setSearchParams({query: e.currentTarget.elements.searchQuery.value})
    // setFinalQuery(e.currentTarget.elements.searchQuery.value)
    setKino([])
    setPage(1)
    if (e.currentTarget.elements.searchQuery.value === ''){
        alert("Вы ничего не ввели в поле поиска =(")
    }
    
}

    return(
        <>
<Form onSubmit={submitForm}>
    <Input 
    type="text" 
    name="searchQuery"
    placeholder='Введите название фильма' 
    autoFocus
    />
    <Btn   type="submit">
        Поиск
    </Btn>
</Form>
{isLoad && <Loader>
    <MutatingDots ariaLabel="loading-indicator" color="red" secondaryColor="red" height={150} width={100} />
             </Loader>}
<Ul>
{kino.length > 0 && (
    kino.map(({id,title,poster_path}) => (
        <Li key={id}>
       <LinkCard to={`/movies/${id}`} state={{from: location}}>
         <Title>{title}</Title>
        <Img src={`https://www.themoviedb.org/t/p/w500/${poster_path}`} alt="" />
       </LinkCard>
       </Li>
    
    ) )
)}
</Ul>
{kino.length > 0 && (
    <Button onClick={loadMore}/>
)}
</>

    )
}