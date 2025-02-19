export default function PokemonCard({ id, name, sprite = [] }) {
    return (
      <section className='h-52'>
        <h2 className='capitalize bg-white shadow-md rounded p-4'>
          #{id} - {name}
        </h2>
  
        {/* Imágenes */}
        <div className="flex space-x-2">
          {sprite.map(sprite => (
            <img key={sprite} src={sprite} alt={name} className="w-24 h-24" />
          ))}
        </div>
  
      </section>
    );
  }
  