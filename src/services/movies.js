// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=5acb29ce
const API_KEY = '5acb29ce'
export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

            const movies = json.Search

            return movies?.map(movie =>({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                image: movie.Poster
            }))
    } catch (e) {
        throw new Error('Error searching movies')
    }
}
