import './App.css';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useEffect, useState } from 'react';
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=5acb29ce

function App() {
    const { movies } = useMovies();
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    console.log('Render')

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ query })
    }

    const handleChange = (event) => {
        const newQuery = event.target.value
        if (newQuery.startsWith(' ')) return
        setQuery(event.target.value)
    }

    useEffect(() => {
        if (query === '') {
            setError('Nada que buscar')
            return
        }
        if (query.length < 3) {
            setError('Escribe mas de 3 caracteres')
            return
        }
        setError(null)
    })

    return (
        <div className="page">
            <header>
                <h1>Buscador de peliculas</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        style={{
                            border: '1px solid transparent',
                            borderColor: error ? 'red' : 'transparent'
                        }} 
                        onChange={handleChange} value={query} name='query' 
                        placeholder="Avengers, Star Wars, Matrix ..." 
                    />
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main>
                <Movies movies={movies} />
            </main>
        </div>
    )
}

export default App
