import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '7ff46056cd22f85530306cb26beea478';

export async function fetchMovies(){
    const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${KEY}&language=ru`)
    return response.data.results
    
}

export async function fetchMoviesId(id){
const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=ru`)
console.log(response.data)
return response.data
}

export async function fetchCredits(id){
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`)
    return response.data
}

export async function fetchReviews(id){
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}` )
    return response.data
}

export async function searchFilms(query, page){
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=${page}&language=ru`)
    
    return response.data
}

export async function fetchVideos(id, lang){
    const response = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=${lang}`)
    console.log(response.data)
    return response.data.results
    }