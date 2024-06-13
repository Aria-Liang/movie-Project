const db = require('../models/dbModel');
const axios = require('axios');
const movieController = {};

movieController.getMovies = async (req, res) => {
    try {
        //const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0b0896e8633958b70902a413206f7307');
        const response = await axios.get('https://api.themoviedb.org/3/movie/653346/videos?api_key=0b0896e8633958b70902a413206f7307')
        const movies = response.data.results;
        res.status(200).json(movies);
    } catch (error) {
        console.error('Error fetching movie data:', error);
        res.status(500).json({ error: 'Unable to fetch movie data' });
    }
};

module.exports = movieController;