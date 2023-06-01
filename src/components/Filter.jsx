import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName, columnFilter, comparisonFilter, valueFilter, click,
  } = useContext(FilterContext);

  function clickButton() {
    click.handleClickAdd([
      columnFilter.value, comparisonFilter.value, valueFilter.value]);
    columnFilter.selectOptions(columnFilter.value);
  }

  const clickButtonRemoveAll = () => {
    click.handleClickRemoveAll();
    columnFilter
      .setAllSelectOptions(columnFilter.value === undefined
        ? undefined : columnFilter.value);
  };

  const clickButtonRemove = (element) => {
    click.handleClickRemove(element);
    columnFilter.setFilteredSelectOptions(element, columnFilter.value);
  };

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
          disabled={ columnFilter.value === undefined }
        >
          {columnFilter.options
            .map((element) => (
              <option
                key={ element }
                value={ element }
              >
                {element}
              </option>))}
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
          onClick={ () => clickButton() }
          disabled={ columnFilter.value === undefined }
        >
          Adicionar Filtro
        </button>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ clickButtonRemoveAll }
        >
          Delete todos
        </button>
        <div>
          {click.value.length > 0 && click.value.map(([first, second, third], index) => (
            <div
              data-testid="filter"
              key={ index }
            >
              <p>{`${first} ${second} ${third}`}</p>
              <button
                type="button"
                onClick={ () => clickButtonRemove([first, second, third]) }
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
