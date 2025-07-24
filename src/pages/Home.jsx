import MovieCard from "../components/MovieCard.jsx"
import { useState, useEffect } from "react"
import { getPopularMovies, searchMovies } from "../services/api.js";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }

            catch (err) {
                setError("Failed to load popular movies...")
                console.log(err);
            }

            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    // const movies = [
    //     { url: "https://placehold.co/150", id: 1, title: "John Wick", release_date: "2020" },
    //     { url: "https://placehold.co/150", id: 2, title: "Terminator", release_date: "1999" },
    //     { url: "https://placehold.co/150", id: 3, title: "The Matrix", release_date: "1998" },
    //     { url: "https://placehold.co/150", id: 4, title: "Sitare Zameen Par", release_date: "2025" },
    //     { url: "https://placehold.co/150", id: 5, title: "Raid 2", release_date: "2025" },
    // ]

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } 
        
        catch (error) {
            console.log(error);
            setError("Failed to search movies...")
        }

        finally{
            setLoading(false);
        }
    }

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <button className="search-button">Search</button>
            </form>


            {loading ? <div className="loading">Loading...</div> :
                <div className="movies-grid">
                    {movies.map((curr, id) => <MovieCard movie={curr} key={curr.id} />)}
                </div>
            }
        </div>
    )
}

export default Home