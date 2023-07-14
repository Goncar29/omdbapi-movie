import './App.css';
import { useMovies } from './hooks/useMovies';
import { Movies } from './components/Movies';
import { useEffect, useRef, useState } from 'react';

function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }// evitamos en el 1° render que salte la siguiente condicion de error del usuario usando useRef 
        if (search === '') {
            setError('Nada que buscar')
            return
        }
        if (search.length < 3) {
            setError('Escribe mas de 3 caracteres')
            return
        }
        setError(null)
    })

    return { search, updateSearch, error }
}

function App() {
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch();
    const { movies, loading, getMovies } = useMovies({ search, sort });

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies({ search })
    }
    //funcion para ordenar movies por titulo
    const handleSort = () => {
        setSort(!sort)
    }

    const handleChange = (event) => {
        updateSearch(event.target.value)
    }

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
                        onChange={handleChange} value={search} name='query' 
                        placeholder="Avengers, Star Wars, Matrix ..." 
                    />
                    <input type="checkbox" onChange={handleSort} checked={sort}></input>
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main>
                {
                    loading ? <p>Caergando...</p> : <Movies movies={movies} />
                }
            </main>
        </div>
    )
}

export default App
