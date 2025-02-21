import { useLayoutEffect, useRef, useState } from "react";

export default function PokemonCard({ id, name, sprites = [] }) {

  const [boxSize, setBoxSize] = useState({width: 0, height: 0});
  const h2ref = useRef();

  useLayoutEffect(() => {
    const { height, width } = h2ref.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <section className="h-52 bg-gray-100 rounded-lg shadow-md p-4 flex flex-col"> {/* Estilos generales del contenedor */}
      <h2 
        ref={h2ref} 
        className="capitalize text-2xl font-bold text-gray-800 mb-2"  
      >
        #{id} - {name}
      </h2>

      {/* Imágenes */}
      <div className="flex space-x-4 justify-center items-center"> {/* Centrar y espaciar imágenes */}
        {sprites.filter(Boolean).map((sprite, index) => (
          <div key={`${sprite}-${index}`} className="w-24 h-24 bg-gray-200 rounded-lg shadow-inner flex justify-center items-center"> {/* Contenedor de imagen con fondo y sombra */}
            <img 
              src={sprite} 
              alt={`pokemon-${index}`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
}