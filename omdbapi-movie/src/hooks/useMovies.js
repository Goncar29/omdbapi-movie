import { useRef, useState } from 'react';
import { searchMovies } from '../services/movies.js';

export function useMovies ({ search }) { //custom hook para fetching de datos y el estado
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = async () => {
        //condicion que evitamos repetir la misma busqueda anterior
        if (search === previousSearch.current) return 

        try{
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    return { movies, getMovies, loading }
}