import { useEffect, useState } from 'react'
import { consultar } from './api/api.js'
import {Contenedor} from './components/Contenedor.jsx'
import {Tarjeta} from './components/Tarjeta.jsx'

function App() {
  const [generos, setGeneros] = useState([])
  const [generoSeleccionado, setGeneroSeleccionado] = useState(null)
  const [peliculas, setPeliculas] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN
    const config={
      method:"GET",
      headers: {
        'content-type': "application/json",
        authorization: `Bearer ${token}`
      },
    }
    fetch(url, config)
    .then((data)=>data.json())
    .then((data)=> console.log(data))
  },[])
  
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center tracking-wide">🎥 Películas</h1>
      <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
        {generos.map(g => (
          <button
            key={g.id}
            onClick={() => setGeneroSeleccionado(g.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${generoSeleccionado === g.id ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-purple-500'}`}
          >
            {g.name}
          </button>
        ))}
      </div>
      {loading && <p className="text-center text-purple-300 text-lg">Cargando...</p>}
      <Contenedor>
        {peliculas.map(p => (
        <Tarjeta key={p.id} item={p} />
        ))}
      </Contenedor>
</div>
  )
}


export default App
