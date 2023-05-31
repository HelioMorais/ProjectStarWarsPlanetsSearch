import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);
  const { filterName, click } = useContext(FilterContext);

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
    .map((planet) => (
      <tr key={ planet.name }>
        {Object.values(planet).map((element, index) => (
          <td key={ `${element}${index}` }>{element}</td>
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
