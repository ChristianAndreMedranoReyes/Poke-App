export const ContenedorPokemons = ({ pokemon, isLoading, error }) => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!pokemon) {
      return <p>No Pokémon to display</p>;
    }
  
    return (
      <div>
        <h3>{pokemon.name} (ID: {pokemon.id})</h3>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <p>Types: {pokemon.types.join(', ')}</p>
      </div>
    );
  };