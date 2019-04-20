'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Movies = new Schema({

    movieName: {
        type: String,
        required: 'Name of movie is mandatory field.'
    },
    movieImage: {
        type: String,
        required: 'Movie Image name is mandatory field'
    },
    movieURL: {
        type: String,
        required: 'Movie URL is a mandatory field'
    },
    movieLength: {
        type: String,
        required: 'Length of Movie is mandatory field.'
    },
    movieReleaseDate: {
        type: String,
        required: 'Movie Release Date'
    },

    directorName: {
        type: String,
        required: 'Name of the director is mandatory field.'
    },
    language: {
        type: String,
        required: 'Language is a Mandatory field.'
    },
    type: {
        type: String,
        required: 'Movie type is mandatory field..'
    },
    rating: {
        type: String,
        required: 'Rating is a mandatory field.'
    }
});
// exports model
module.exports = mongoose.model('Movies', Movies);
