import { useEffect, useState } from "react";
import GetFavMovies from "./GetMovies";

function FavList() {
    const [favMovieData, setFavMovieData] = useState([])

    const getFavoriteMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/getmovies`;
        fetch(serverURL)
            .then(response => {
                response.json()
                    .then(data => {
                        setFavMovieData(data)
                    })
            })
    }
    useEffect(() => {
        getFavoriteMovies();
    }, [])

    return (<>
        <GetFavMovies favMovieData={favMovieData} />
    </>)
}
export default FavList