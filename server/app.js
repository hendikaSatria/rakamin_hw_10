const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./database/db');
const UserRepository = require('./repositories/userRepository');
const UserModel = require('./models/userModel');
const MovieModel = require('./models/movieModel');
const MovieRepository = require('./repositories/movieRepository');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static('public/images'));

const userModel = new UserModel(pool);
const userRepository = new UserRepository(userModel);

const movieModel = new MovieModel(pool);
const movieRepository = new MovieRepository(movieModel);

const usersRouter = require('./routes/users')(userRepository);
const movieRouter = require('./routes/movies')(movieRepository);

app.use('/api/movies', movieRouter);
app.use('/api/users', usersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;
