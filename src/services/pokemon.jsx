export const getPokemon = async (poke) => {
  try {
      const url = `https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}`;
      const resp = await fetch(url);
      
      if (!resp.ok) {
          throw new Error('No se encontro');
      }

      const po = await resp.json();
      const pokemon = {
          id: po.id,
          name: po.name,
          sprite: po.sprites.front_default,
          types: po.types.map((type) => type.type.name),
          moves: po.moves.slice(0, 3).map((move) => move.move.name),
          weight: po.weight,
          height: po.height,
      }

      return pokemon;
  } catch (err) {
      console.error(err)
  }
}
