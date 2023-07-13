import './App.css';
import responseMovies from './mocks/results.json';
import noResults from './mocks/no-Results.json';

function App() {
    const movies = responseMovies.Search
    const hasMovies = movies?.lenght > 0
    return (
        <div className="page">
            <header>
                <h1>Buscador de peliculas</h1>
                <form className="form">
                    <input placeholder="Avengers, Star Wars, Matrix ..." />
                    <button type="submit">Buscar</button>
                </form>
            </header>

            <main>
                <ul>
                    {
                        movies.map(movie =>(
                            <li key={movie.imdbID}>
                                <h3>{movie.Title}</h3>
                                <p>{movie.Year}</p>
                                <img src={movie.Poster} alt={movie.Title}></img>
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}

export default App
