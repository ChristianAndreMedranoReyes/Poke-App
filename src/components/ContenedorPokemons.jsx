import React from 'react';

export const ContenedorPokemons = ({ pokemon, error }) => {
    if (error) {
        return <p>{error}</p>;
    }

    if (!pokemon) {
        return <p>No hay Pokémon para mostrar</p>;
    }

    return (
      <div className="d-flex justify-content-center">
        <div className="card mb-3" style={{ maxWidth: '999px', backgroundColor: 'skyblue', color: 'white'}}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img 
                        src={pokemon.sprite} 
                        className="img-fluid rounded-start" 
                        alt={pokemon.name} 
                        style={{ maxWidth: '100%', height: '500px', objectFit: 'contain' }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                        <p className="card-text">
                            Tipo:
                        </p>
                        <ul className="list-group list-group-flush">
                            {pokemon.types.map((type, index) => (
                                <li key={index} className="list-group-item">
                                    {type}
                                </li>
                            ))}
                        </ul>
                        <p className="card-text mt-3">
                            Movimientos:
                        </p>
                        <ul className="list-group list-group-flush">
                            {pokemon.moves.map((move, index) => (
                                <li key={index} className="list-group-item">
                                    {move}
                                </li>
                            ))}
                        </ul>
                        <p className="card-text mt-3">
                            Peso: {pokemon.weight}kg
                        </p>
                        <p className="card-text">
                            Altura: {pokemon.height}m
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};