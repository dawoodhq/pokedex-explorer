import PokemonCard from './PokemonCard';

import { RotateLoader } from 'react-spinners';

const PokemonList = ({ list, isLoading }) => {
  return (
    <div className="text-center 2xl:w-[96rem] lg:w-5xl w-3xl bg-gray-900 rounded-md">
      {isLoading ? <RotateLoader
        color={'oklch(30% 0.028 261.692)'}
        loading={isLoading}
        className="my-8"
        size={8.5}
        margin={-10}
      /> : <div className="flex flex-wrap w-full">
          {Array.isArray(list) && list.map((pokemonData, index) => (
              <PokemonCard key={index} data={pokemonData}></PokemonCard>
          ))}
      </div>}
    </div>
  )
}

export default PokemonList;