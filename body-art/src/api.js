import axios from "axios";

const api = axios.create({
  // baseURL: "https://63795bc67419b414df8dedcf.mockapi.io/api/profissionais", // sua url do mockiapi
  baseURL: "http://localhost:8080",
});

export default api;
