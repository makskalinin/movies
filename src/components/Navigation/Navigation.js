import {Outlet} from 'react-router-dom'
import { Link, Wrapper } from './Navigation.styled'
import { Suspense } from 'react'
export default function Navigation(){
 
    return(
        <Wrapper>
        <nav>
        <Link to='/home'>
        Главная
        </Link>
        <Link to='/movies'>
        Фильмы
        </Link>
        <Suspense fallback=''>
        <Outlet/>
        </Suspense>
        </nav>
        </Wrapper>
    )
   
}