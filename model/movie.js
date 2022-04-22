const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Поле "coutnry" должно быть заполнено'],
  },
  director: {
    type: String,
    required: [true, 'Поле "director" должно быть заполнено'],
  },
  duration: {
    type: Number,
    required: [true, 'Поле "duration" должно быть заполнено'],
  },
  year: {
    type: String,
    required: [true, 'Поле "year" должно быть заполнено'],
  },
  description: {
    type: String,
    required: [true, 'Поле "description" должно быть заполнено'],
  },
  image: {
    type: String,
    required: [true, 'Поле "image" должно быть заполнено'],
    validate: {
      validator: (v) => isURL(v, { required_protocol: true }),
      message: 'Поле не соответствует требуемому формату URL',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Поле "trailer" должно быть заполнено'],
    validate: {
      validator: (v) => isURL(v, { required_protocol: true }),
      message: 'Поле не соответствует требуемому формату URL',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Поле "thumbnail" должно быть заполнено'],
    validate: {
      validator: (v) => isURL(v, { required_protocol: true }),
      message: 'Поле не соответствует требуемому формату URL',
    },
  },
  owner: {
    type: mongoose.ObjectId,
    ref: 'user',
    required: [true, 'Поле "owner" должно быть заполнено'],
  },
  movieId: {
    type: Number,
    required: [true, 'Поле "movieId" должно быть заполнено'],
  },
  nameRU: {
    type: String,
    required: [true, 'Поле "nameRu" должно быть заполнено'],
  },
  nameEN: {
    type: String,
    required: [true, 'Поле "nameEN" должно быть заполнено'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
