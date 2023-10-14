const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movieControllers');
const multer = require('multer');

module.exports = (movieRepository) => {
    const storage = multer.diskStorage({
        destination: 'public/images',
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Prevent file collision
            cb(null, file.fieldname + '-' + uniqueSuffix);
        }
    });

    const upload = multer({ storage: storage });
    const movieController = new MovieController(movieRepository);

    router.get('/', movieController.getAllMovies);
    router.get('/:id', movieController.getMovieById);

    router.post('/', upload.single('moviePhoto'), movieController.createMovie);
    router.put('/:id', upload.single('moviePhoto'), movieController.updateMovie);

    router.delete('/:id', movieController.deleteMovie);

    return router;
};