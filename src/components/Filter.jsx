import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName, column, columnFilter, comparisonFilter, valueFilter, click,
  } = useContext(FilterContext);
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Name"
          id="name-filter"
          value={ filterName.value }
          onChange={ filterName.handleChange }
        />
      </div>
      <div>
        <select
          data-testid="column-filter"
          onChange={ columnFilter.handleChange }
        >
          {column
            .map((elem) => <option key={ elem } value={ elem }>{elem}</option>)}
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ comparisonFilter.handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          data-testid="value-filter"
          placeholder="Número"
          type="number"
          value={ valueFilter.value }
          onChange={ valueFilter.handleChange }
        />

        <button
          data-testid="button-filter"
          type="button"
          onClick={
            () => click.handleClickAdd([
              columnFilter.value, comparisonFilter.value, valueFilter.value])
          }
        >
          Adicionar Filtro
        </button>
        <div>
          {click.value.length > 0 && click.value.map((element, index) => (
            <div key={ index }>
              <p>{ `${element[0]} ${element[1]} ${element[2]}` }</p>
              <button
                type="button"
              >
                Delete Filtros
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
