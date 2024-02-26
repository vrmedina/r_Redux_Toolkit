import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  const {
    isLoading,
    page,
    pokemons = [],
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Cargando: {isLoading ? 'SI' : 'NO'}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>Pagina {page}</p>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Siguiente
      </button>
    </>
  );
};
