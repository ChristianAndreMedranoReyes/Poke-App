import { useState } from 'react';
import { getPokemon } from '../services/pokemon';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async (query) => {
    try {
      setIsLoading(true);
      const result = await getPokemon(query);
      setPokemon(result);
      setError(null);
    } catch (error) {
      setError('Pokemon not found');
      setPokemon(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    pokemon,
    isLoading,
    error,
    fetchPokemon,
  };
};