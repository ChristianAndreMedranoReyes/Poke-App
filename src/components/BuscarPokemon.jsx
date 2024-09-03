import React, { useState } from 'react';

export const BuscarPokemon = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar Pokémon por nombre o ID"
      />
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
};