import axios from "axios";

const apiKey = '38c6c941973ddf6d48ec6164c009c114'
const baseUrl = 'https://api.themoviedb.org/3'
const language = 'id-ID'
const region = 'ID'

const requests = {
    requestNowPlaying: `${baseUrl}/movie/now_playing?api_key=${apiKey}&language=${language}&page=1&region=${region}`,
    requestPopular: `${baseUrl}/movie/popular?api_key=${apiKey}&language=${language}&page=1&region=${region}`,
    requestTopRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=${language}&page=1&region=${region}`,
    requestUpcoming: `${baseUrl}/movie/upcoming?api_key=${apiKey}&language=${language}&page=1&region=${region}`,
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}&language=${language}`)
    return search.data
}

export default requests