import { useEffect, useState } from 'react';
import MovieList from '../movielist/MovieList.js'
import './Home.css';

function Home() {
    const [movieData, setMovieData] = useState([])

    const getAllMovie = () => {

        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        console.log(serverURL);

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
        
        <MovieList  movieData={movieData}/>
    </>)
}
export default Home