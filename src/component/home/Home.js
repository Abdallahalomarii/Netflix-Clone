import { useEffect, useState } from 'react';
import MovieList from '../movielist/MovieList.js'
import './Home.css';


function Home() {
    const [movieData, setMovieData] = useState([])

    const getAllMovie = () => {

        const serverURL = 'http://localhost:3000/trending';

        fetch(serverURL)
            .then(response => {
                response.json()
                .then(data => {
                    setMovieData(data)

                })
            })
    }
    useEffect(() => {
        getAllMovie()
    }, [])
    return (<>
        <h1>Home</h1>
        <MovieList  movieData={movieData}/>
    </>)
}
export default Home