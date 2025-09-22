const API_TOKEN = import.meta.env.VITE_TOKEN;
const API_URL = "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1";

export async function getPopularMovies() {
  try {
    const response = await fetch(`${API_URL}&api_key=${API_TOKEN}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error al obtener películas:", error);
    return [];
  }
}