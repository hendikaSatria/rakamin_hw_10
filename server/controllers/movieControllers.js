class MovieController {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }

    getAllMovies = async (req, res) => {
        try {
            console.log(this.movieRepository);
            const movies = await this.movieRepository.getAllMovies();
            res.json(movies);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    getMovieById = async (req, res) => {
        const movieId = req.params.id;
        try {
            const movie = await this.movieRepository.getMovieById(movieId);
            if (movie) {
                res.json(movie);
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    createMovie = async (req, res) => {
        const { title, genres, year } = req.body;
        try {
            const photo = req.file ? req.file.path : null;
            const newMovie = await this.movieRepository.createMovie(title, genres, year, photo);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    updateMovie = async (req, res) => {
        const movieId = req.params.id;
        const { title, genres, year } = req.body;
        try {
            const photo = req.file ? req.file.path : null;
            const updatedMovie = await this.movieRepository.updateMovie(movieId, title, genres, year, photo);
            res.json(updatedMovie);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    deleteMovie = async (req, res) => {
        const movieId = req.params.id;
        try {
            await this.movieRepository.deleteMovie(movieId);
            res.json({ message: 'Movie deleted successfully' });
        } catch (error) {
            res.status(404).json({ error: 'Movie not found' });
        }
    }
}

module.exports = MovieController;