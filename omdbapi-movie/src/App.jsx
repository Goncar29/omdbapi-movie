import './App.css';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useRef } from 'react';
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=5acb29ce

function App() {
    const { movies } = useMovies();
    const inputRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputEl = inputRef.current
        const value = inputEl.value
        alert(value)
    }
    return (
        <div className="page">
            <header>
                <h1>Buscador de peliculas</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input ref={inputRef} placeholder="Avengers, Star Wars, Matrix ..." />
                    <button type="submit">Buscar</button>
                </form>
            </header>

            <main>
                <Movies movies={movies} />
            </main>
        </div>
    )
}

export default App
