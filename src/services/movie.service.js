import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";

export const movieService = {
    getAll: (currentPage) => axiosService.get(`${urls.movies}?api_key=${apiKey}&page=${currentPage}`).then(value => value.data),
    getById: (id) => axiosService.get(`/movie/${id}?api_key=${apiKey}`).then(value => value.data),
    getMovieByGenres: (id) => axiosService.get(`${urls.movies}?&language=en-US&${apiKey}&with_genres=${id}&page=`).then(value => value.data)
}