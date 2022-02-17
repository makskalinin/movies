import { Container } from "./App.styled";
import {Navigate, Route, Routes} from 'react-router-dom';
 import Navigation from "./Navigation";
import { lazy } from "react";

 const HomePage = lazy(() => 
   import('./HomePage/HomePage')
 );
 const Movies = lazy(() => 
 import('./Movies/Movies')
);
const MoviesPage = lazy(() => 
import('./MoviesPage/MoviesPage')
)

 
 export default function App() {

  return (
    <Container>
    
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route path="home" element={<HomePage/>}/>
      <Route path="movies" element={<MoviesPage/>}/>
      <Route path="movies/:movId/*" element={<Movies/>}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Route>
    </Routes>

    </Container>
   
    
  );
};
