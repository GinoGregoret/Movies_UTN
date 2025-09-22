import { useEffect, useState } from 'react'
import { getPopularMovies } from './api/api.js'
import {Contenedor} from './components/Contenedor.jsx'
import {Tarjeta} from './components/Tarjeta.jsx'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const url = import.meta.env.VITE_URL
  const token = import.meta.env.VITE_TOKEN

  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }

  fetch(url, config)
    .then(res => res.json())
    .then(data => {
      console.log('Películas recibidas:', data)
      setMovies(data.results || [])
      setLoading(false)             
    })
    .catch(err => {
      console.error('Error al cargar películas:', err)
      setLoading(false)
    })
}, [])
    const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <main className="bg-gray-900 min-h-screen text-white font-sans p-8">
    
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4">
          🍿 Peliculas 🍿
        </h1>
        <input
          type="text"
          placeholder="Busca la película por nombre..."
          className="w-full max-w-lg p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

    
      {loading ? (
        <p className="text-center text-xl">Cargando películas...</p>
      ) : (
       
        <Contenedor>
          {filteredMovies.map((movie) => (
            <Tarjeta key={movie.id} item={movie} />
          ))}
        </Contenedor>
      )}
    </main>
  );
}

export default App;