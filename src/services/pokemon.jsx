export const getPokemon = async (query) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Pokemon No Encontrado');
    }
    
    const data = await response.json();
    
    return {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map((type) => type.type.name),
    };
  };
  