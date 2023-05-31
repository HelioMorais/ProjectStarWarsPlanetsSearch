import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import FilterProvider from './context/FilterProvider';
import Filter from './components/Filter';

function App() {
  return (
    <PlanetsProvider>
      <FilterProvider>
        <header>Project StarWars Planets Search</header>
        <Filter />
        <Table />
      </FilterProvider>
    </PlanetsProvider>
  );
}

export default App;
