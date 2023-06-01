import { useState } from 'react';

function useFilterInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const column = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const [options, setOptions] = useState(column);
  const columnDel = [];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const selectOptions = (string) => {
    const array = options.filter((element) => element !== string);
    setOptions(array);
    setValue(array[0]);
  };

  const setAllSelectOptions = (string = column[0]) => {
    setOptions(column);
    setValue(string);
  };

  const setFilteredSelectOptions = (array, string) => {
    const newArray = [...options, array[0]];
    const optionsValue = column.filter((element) => newArray.includes(element));
    setOptions(optionsValue);
    setValue(string !== undefined ? string : optionsValue[0]);
  };

  return {
    value,
    options,
    columnDel,
    selectOptions,
    setOptions,
    handleChange,
    setAllSelectOptions,
    setFilteredSelectOptions,
  };
}

export default useFilterInput;
