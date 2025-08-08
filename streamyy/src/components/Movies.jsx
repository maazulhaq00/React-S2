
import moviesData from '../data/moviesData.json'
import MovieCard from './MovieCard';


function Movies() {

    // let movie = {
    //     name: "Lovely Runner",
    //     id: "lovely-runner",
    //     img_url: "http://localhost:5173/images/lr.webp",
    //     rating: "9.8",
    //     description: "Im Sol travels back in time to prevent the tragic fate of her favorite star, Ryu Sun Jae.",
    //     cast: ["Kim Hye Yoon", "Byeon Woo Seok", "Song Geon Hee"],
    //     genre: ["Romantic Comedy", "Fantasy"],
    //     watch_url: "https://www.viki.com/tv/40466c-lovely-runner"
    // }

    console.log(moviesData)

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    moviesData.map((movie) => {
                        return (
                            <MovieCard  data={movie} /> 
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Movies;


{/* <div className="col">
                    <div className="card">
                        <img src={movie.img_url} className="card-img-top" alt={movie.description} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            
                            <p className="card-text">
                                {movie.description}
                            </p>
                            <p><b>Rating:</b> {movie.rating}</p>
                            <p><b>Cast:</b> {movie.cast}</p>
                            <p><b>Genre:</b> {movie.genre}</p>
                            <a href={movie.watch_url} target="_blank" class="btn btn-dark">Watch Now</a>
                        </div>
                    </div>
                </div> */}