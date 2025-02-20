export default function PokemonCard({ id, name, sprites = [] }) {

  return (
    <section className='h-52'>
      <h2 className='capitalize bg-white shadow-md rounded p-4'>
        #{id} - {name}
      </h2>

      {/* Imágenes */}

      <div className="flex space-x-4">
        {sprites.filter(Boolean).map((sprite, index) => (
          <img key={`${sprite}-${index}`} src={sprite} alt={`pokemon-${index}`} />
        ))}

      </div>


    </section>
  );
}
