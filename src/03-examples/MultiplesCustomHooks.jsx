import { useCounter, useFetch } from "../hooks"
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";


export default function MultiplesCustomHooks() {

  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Informacion de Pokemon </h1>

      <hr />

      {
        isLoading ?
          <LoadingMessage /> :
          <PokemonCard 
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}
          />
      }
      <br />
      <br />

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => counter > 1 ? decrement() : null}
          className=" px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-400">
          Anterior
        </button>

        <button
          onClick={() => increment()}
          className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Siguiente
        </button>
      </div>
    </>
  )
}
