export function Tarjeta({ item }) {
    return (
      <div className="group relative w-[250px] h-[400px] bg-gray-800 rounded-2xl overflow-hidden shadow-lg shadow-black/50 transform hover:scale-105 transition-transform duration-300">
  
        <div className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={item.imageUrl}
            alt={`Póster de ${item.title}`}
          />
        </div>
  
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"></div>
  
       
        <div className="relative p-4 flex flex-col justify-end h-full text-white">
          
         
          <div className="mb-2">
              <span className="font-semibold">Nombre:</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
  
        
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 backdrop-blur-sm
                          opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0
                          transition-all duration-500 ease-in-out">
            <p className="text-sm">{item.overview}</p>
          </div>
        </div>
      </div>
    );
  }
