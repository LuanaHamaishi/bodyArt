import axios from 'axios';

const api = axios.create({
  baseURL: "https://633607188aa85b7c5d274257.mockapi.io/music-box" // sua url do mockiapi
})

export default api;