import { useEffect, useState } from 'react'
import {Contenedor} from './components/Contenedor'
import {Tarjeta} from './components/Tarjeta'

function App() {

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
    <div>
      Contenedor
    </div>
  )
}

export default App
