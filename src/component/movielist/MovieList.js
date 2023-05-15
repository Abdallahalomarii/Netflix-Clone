import Movie from '../movie/Movie.js';
function MovieList (props) {
   
   
   
       return props.movieData.map(item=>
            {
              return  <div className='movie' key={item.id}>
                    
              <Movie item={item}/>
                </div>
        })
       
}
export  default MovieList ;