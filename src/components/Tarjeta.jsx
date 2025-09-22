export function Tarjeta({ item }) {
  const { title, poster_path, vote_average, release_date } = item

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">
          {vote_average} &nbsp;|&nbsp; {release_date}
        </p>
      </div>
    </div>
  )
}