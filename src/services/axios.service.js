import axios from "axios";

import baseURL from "../configs/urls";

export const axiosService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk0NGI3OWM0OGQwYjMzY2EyOTIwYjhjNWQ0MjQzOSIsInN1YiI6IjYyMDE0MzJjZThkMGI0MDA4YzQxZjYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBmyz87k7jp9szOV00Dlf1HfWmzN7bUUm_KMSFxul50'
    }
});