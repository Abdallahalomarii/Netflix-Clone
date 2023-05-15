import Movie from '../movie/Movie.js';
import './MovieList.css'
function MovieList (props) {
   
   
   
       return (
        <div className='container'>
        {
        props.movieData.map(item=>
          {
            return  <div className='movie' key={item.id}>
                  
            <Movie item={item}/>
              </div>
      })
      }
        </div>
       )
       
}
export  default MovieList ;