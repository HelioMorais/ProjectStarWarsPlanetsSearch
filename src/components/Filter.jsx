import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Filter() {
  const { filterName } = useContext(FilterContext);
  return (
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
  );
}

export default Filter;
