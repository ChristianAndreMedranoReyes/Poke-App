import React from 'react';
import { BuscarPokemon } from './BuscarPokemon';
import { ContenedorPokemons } from './ContenedorPokemons'; 
import { usePokemon } from '../hooks/usePokemon';

export const PokeApp = () => {
  const { pokemon, error, fetchPokemon } = usePokemon();

  const handleSearch = (poke) => {
    fetchPokemon(poke);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">PokeApp</h2>
      <div className="d-flex justify-content-center">
        <BuscarPokemon onSearch={handleSearch} />
      </div>
      <ContenedorPokemons pokemon={pokemon} error={error} />
    </div>
  );
};