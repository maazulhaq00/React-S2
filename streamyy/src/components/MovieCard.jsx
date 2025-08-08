function MovieCard(prop) {


    // let movie = prop.data



    return (<div className="col">
        <div className="card">
            <img src={prop.data.img_url} className="card-img-top" alt={prop.data.description} />
            <div className="card-body">
                <h5 className="card-title">{prop.data.name}</h5>

                <p className="card-text">
                    {prop.data.description}
                </p>
                <p><b>Rating:</b> {prop.data.rating}</p>
                <p><b>Cast:</b> {prop.data.cast}</p>
                <p><b>Genre:</b> {prop.data.genre}</p>
                <a href={prop.data.watch_url} target="_blank" class="btn btn-dark">Watch Now</a>
            </div>
        </div>
    </div>);
}

export default MovieCard;