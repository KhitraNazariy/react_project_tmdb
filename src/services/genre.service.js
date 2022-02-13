import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs";

export const genreService = {
    getAll: () => axiosService.get(`${urls.genres}?api_key=${apiKey}`).then(value => value.data)
}