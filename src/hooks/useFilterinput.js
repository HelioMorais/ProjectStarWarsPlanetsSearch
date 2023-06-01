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

  return {
    value,
    options,
    columnDel,
    selectOptions,
    setOptions,
    handleChange,
  };
}

export default useFilterInput;
