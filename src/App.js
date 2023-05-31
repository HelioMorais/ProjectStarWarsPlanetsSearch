import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <header>Project StarWars Planets Search</header>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
