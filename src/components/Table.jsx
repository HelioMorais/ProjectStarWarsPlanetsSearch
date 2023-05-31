import { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, keys } = useContext(PlanetsContext);

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
        {planets.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((element, index) => (
              <td key={ `${element}${index}` }>{element}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
