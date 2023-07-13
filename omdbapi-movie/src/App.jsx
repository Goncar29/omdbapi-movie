import './App.css';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=5acb29ce

function App() {
    const { movies: mappedMovies } = useMovies();

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
                <Movies movies={mappedMovies} />
            </main>
        </div>
    )
}

export default App
