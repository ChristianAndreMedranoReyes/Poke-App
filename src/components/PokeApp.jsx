import { useState } from 'react';
import { BuscarPokemon } from './BuscarPokemon';
import { ContenedorPokemons } from './ContenedorPokemons';
import { usePokemon } from '../hooks/usePokemon';

export const PokeApp = () => {
  const { pokemon, isLoading, error, fetchPokemon } = usePokemon();

  const handleSearch = (query) => {
    fetchPokemon(query);
  };

  return (
    <div>
      <h2>PokeApp</h2>
      <BuscarPokemon onSearch={handleSearch} />
      <ContenedorPokemons pokemon={pokemon} isLoading={isLoading} error={error} />
    </div>
  );
};