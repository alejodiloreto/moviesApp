import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2cb2c1b00291c5b9629da2d6f5e624c0',
    language: 'es-ES'
  }
})

export default movieDB