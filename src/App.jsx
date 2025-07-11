import { useEffect, useState } from 'react';
import './App.css';

import PokemonList from './components/Pokemon/PokemonList';
import Paginator from './components/Pokemon/Paginator';
import BackgroundGlow from './components/BackgroundGlow';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [currentURL, setCurrentURL] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonData = async () => {
    setIsLoading(true);

    const data = await fetch(currentURL)
      .then(response => response.json());

    const refactoredPokemonList = await Promise.all(data.results.map(async ({ url }) => {
      // Check for cached Pokemon data.
      if (sessionStorage.getItem(url) != null) return JSON.parse(sessionStorage.getItem(url));

      const refactoredPokemon = await fetch(url).then(response => response.json())
        .then(({ name, sprites: { front_default: image }, abilities, moves }) => ({
          name, image,
          abilities: abilities.map(abilityData => ({
            name: abilityData.ability.name
          })).slice(0,5),
          moves: moves.map(moveData => ({
            name: moveData.move.name,
            details: moveData.version_group_details
          })).slice(0,5)
        }));

      // Cache the Pokemon data.
      sessionStorage.setItem(url, JSON.stringify(refactoredPokemon));
      return refactoredPokemon;
    }));

    setPokemonList({ ...data, results: refactoredPokemonList });
    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchPokemonData();
  }, [currentURL]);

  return (
    <main className="bg-gray-950/97.5 h-screen overflow-auto overflow-x-hidden">
      <h1 className="text-center 2xl:text-6xl lg:text-5xl text-4xl 2xl:mt-20 lg:mt-15 mt-10 text-white font-bold animate-appear">Simple Pokédex Explorer</h1>
      <p className="text-center 2xl:text-2xl lg:text-xl text-gray-400 my-8 animate-appear animation-delay-250">Browse and discover Pokémon, view their sprites, abilities, and moves fetched live from the <a className="font-semibold underline text-gray-200/90 hover:text-gray-100/95 transition-colors duration-300" target="_blank" href="https://pokeapi.co">PokéAPI</a>.</p>
      <div className="flex justify-center items-center flex-col gap-y-4 animate-appear animation-delay-500 relative">
        <BackgroundGlow />
        <Paginator
          previous={pokemonList.previous ? (() => setCurrentURL(pokemonList.previous)) : null}
          next={pokemonList.next ? (() => setCurrentURL(pokemonList.next)) : null}
          isLoading={isLoading}
        />
        
        <PokemonList list={pokemonList.results} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default App;