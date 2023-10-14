class MovieModel {
    constructor(db) {
        this.db = db;
    }

    getAllMovies = async () => {
        return await this.db.query('SELECT * FROM movies');
    };

    getMovieById = async (movieId) => {
        return await this.db.query('SELECT * FROM movies WHERE id = $1', [movieId]);
    };

    createMovie = async (title, genres, year, photo) => {
        return await this.db.query(
            'INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, genres, year, photo]
        );
    };

    updateMovie = async (movieId, title, genres, year, photo) => {
        return await this.db.query(
            'UPDATE movies SET title = $1, genres = $2, year = $3, photo = $4 WHERE id = $5 RETURNING *',
            [title, genres, year, photo, movieId]
        );
    };

    deleteMovie = async (movieId) => {
        await this.db.query('DELETE FROM movies WHERE id = $1', [movieId]);
    };
}

module.exports = MovieModel;