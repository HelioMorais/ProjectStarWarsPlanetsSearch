import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import useFilterInput from '../hooks/useFilterinput';

function FilterProvider({ children }) {
  const filterName = useFilterInput('');
  return (
    <FilterContext.Provider value={ { filterName } }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;

FilterProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
