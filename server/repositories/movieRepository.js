class MovieRepository {
    constructor(movieModel) {
        this.movieModel = movieModel;
    }

    getAllMovies = async () => {
        try {
            const result = await this.movieModel.getAllMovies();
            return result.rows;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    getMovieById = async (movieId) => {
        try {
            const result = await this.movieModel.getMovieById(movieId);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    createMovie = async (title, genres, year, photo) => {
        try {
            const result = await this.movieModel.createMovie(title, genres, year, photo);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    updateMovie = async (movieId, title, genres, year, photo) => {
        try {
            const result = await this.movieModel.updateMovie(movieId, title, genres, year, photo);
            return result.rows[0];
        } catch (error) {
            throw new Error(error.message);
        }
    };

    deleteMovie = async (movieId) => {
        try {
            await this.movieModel.deleteMovie(movieId);
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

module.exports = MovieRepository;