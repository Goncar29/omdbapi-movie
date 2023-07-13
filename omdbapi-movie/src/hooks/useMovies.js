import responseMovies from '../mocks/results.json';
import noResults from '../mocks/no-Results.json';

export function useMovies () { //custom hook para fetching de datos y el estado
    const movies = responseMovies.Search

    const mappedMovies = movies?.map(movie =>({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
    }))

    return { movies: mappedMovies }
}