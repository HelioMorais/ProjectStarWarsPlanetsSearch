import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);
  const { filterName, click, clickSort } = useContext(FilterContext);
  const UNKNOWN_VALUE = -1;

  function sortFilter(a, b) {
    const { column, sort } = clickSort.value;

    if (column && sort === 'ASC') {
      const aValue = a[column];
      const bValue = b[column];

      if (!aValue.includes('unknown') && bValue.includes('unknown')) {
        return UNKNOWN_VALUE;
      }

      if (aValue.includes('unknown') && !bValue.includes('unknown')) {
        return 1;
      }

      return aValue - bValue;
    }

    if (column && sort === 'DESC') {
      return b[column] - a[column];
    }

    return a;
  }

  function filterMore(element) {
    const { value } = click;
    if (value.length === 0) {
      return true;
    }

    return value.every(([key, operator, comparisonValue]) => {
      switch (operator) {
      case 'maior que':
        return element[key] > +comparisonValue;
      case 'menor que':
        return element[key] < +comparisonValue;
      case 'igual a':
        return element[key] === comparisonValue;
      default:
        return false;
      }
    });
  }

  const filteredPlanets = planets
    .filter((element) => element.name.toLowerCase()
      .includes(filterName.value.toLowerCase()));

  const filteredAndMappedPlanets = filteredPlanets
    .filter((element) => filterMore(element))
    .sort((a, b) => sortFilter(a, b))
    .map((planet) => (
      <tr key={ planet.name }>
        {Object.values(planet).map((item, index) => (
          <td
            key={ `${item}${index}` }
            data-testid={ planet.name === item ? 'planet-name' : undefined }
          >
            {item}
          </td>
        ))}
      </tr>
    ));

  return (
    <table>
      <thead>
        <tr>
          {keys.map((element) => (
            <th key={ element }>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>{filteredAndMappedPlanets}</tbody>
    </table>
  );
}

export default Table;
