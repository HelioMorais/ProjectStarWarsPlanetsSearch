import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import FilterContext from '../context/FilterContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);
  const { filterName } = useContext(FilterContext);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((element) => (
            <th key={ element }>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        { planets.filter((element) => (
          element.name.toLowerCase()).includes(filterName.value.toLowerCase()))
          .map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((element, index) => (
                  <td key={ `${element}${index}` }>{element}</td>
                ))
              }
            </tr>))}
      </tbody>
    </table>
  );
}

export default Table;
