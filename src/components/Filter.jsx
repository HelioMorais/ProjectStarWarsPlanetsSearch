import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const {
    filterName,
    columnFilter,
    comparisonFilter,
    valueFilter,
    click,
    sortFilter,
    radioFilter,
    clickSort,
  } = useContext(FilterContext);

  const handleFilterAdd = () => {
    const filterData = [
      columnFilter.value,
      comparisonFilter.value,
      valueFilter.value,
    ];
    click.handleClickAdd(filterData);
    columnFilter.selectOptions(columnFilter.value);
  };

  const handleRemoveAllFilters = () => {
    click.handleClickRemoveAll();
    columnFilter.setAllSelectOptions(
      columnFilter.value === undefined ? undefined : columnFilter.value,
    );
  };

  const handleRemoveFilter = (element) => {
    click.handleClickRemove(element);
    columnFilter.setFilteredSelectOptions(element, columnFilter.value);
  };

  const handleSortButtonClick = () => {
    const sortData = {
      column: sortFilter.value,
      sort: radioFilter.value,
    };
    clickSort.handleClickSort(sortData);
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
          {columnFilter.options.map((element) => (
            <option key={ element } value={ element }>
              {element}
            </option>
          ))}
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
          onClick={ handleFilterAdd }
          disabled={ columnFilter.value === undefined }
        >
          Adicionar Filtro
        </button>
        <button
          data-testid="button-remove-filters"
          type="button"
          onClick={ handleRemoveAllFilters }
        >
          Delete todos
        </button>
        <div>
          <select
            data-testid="column-sort"
            onChange={ sortFilter.handleChange }
          >
            {columnFilter.column.map((item) => (
              <option key={ item } value={ item }>
                {item}
              </option>
            ))}
          </select>

          <div>
            <label htmlFor="column-sort-input-asc">Ascendente</label>
            <input
              data-testid="column-sort-input-asc"
              value="ASC"
              name="sort"
              id="column-sort-input-asc"
              type="radio"
              onChange={ radioFilter.handleChange }
            />

            <label htmlFor="column-sort-input-desc">Descendente</label>
            <input
              data-testid="column-sort-input-desc"
              value="DESC"
              name="sort"
              id="column-sort-input-desc"
              type="radio"
              onChange={ radioFilter.handleChange }
            />
          </div>
          <button
            data-testid="column-sort-button"
            type="button"
            onClick={ handleSortButtonClick }
          >
            Ordenar
          </button>
        </div>

        {click.value.length > 0
          && click.value.map(([first, second, third], index) => (
            <div data-testid="filter" key={ index }>
              <p>{`${first} ${second} ${third}`}</p>
              <button
                type="button"
                onClick={ () => handleRemoveFilter([first, second, third]) }
              >
                Delete Filtros
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Filter;
