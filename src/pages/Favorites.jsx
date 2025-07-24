import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext.jsx'
import MovieCard from '../components/MovieCard.jsx'

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <div className="movies-grid">
                    {favorites.map((curr, id) => <MovieCard movie={curr} key={curr.id} />)}
                </div>
            </div>
        );
    }

    return <div className="favorites-empty">
        <h2>No Favorite Movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
}

export default Favorites