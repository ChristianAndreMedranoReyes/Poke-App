import { useState } from 'react';
import { getPokemon } from '../services/pokemon';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState([]);

  const fetchPokemon = async (query) => {
    try {
      const result = await getPokemon(query);
      setPokemon(result);
      setError(null);
    } catch (error) {
      setError('Pokemon not found');
      setPokemon(null);
    }
  };

  return {
    pokemon,
    error,
    fetchPokemon,
  };
};