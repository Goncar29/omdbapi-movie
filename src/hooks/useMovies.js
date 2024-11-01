import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../services/movies.js';

export function useMovies ({ search, sort }) { //custom hook para fetching de datos y el estado
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    // useCalback es igual a useMemo pero este es usado mas para funciones
    const getMovies = useCallback(async ({ search }) => {
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
    }, [])

    // useMemo nos ayuda a guardar calculos y funciones ya realizados sin tenerlas 
    // que hacerlas de nuevo y dependiendo de las depencias
    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])


    return { movies: sortedMovies, getMovies, loading }
}