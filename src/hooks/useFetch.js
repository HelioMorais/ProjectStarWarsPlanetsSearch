import { useState } from 'react';

function useFetch(url) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const removeResidents = data.results;
      removeResidents.map((element) => delete element.residents);
      setPlanets(removeResidents);
    } catch (erro) {
      setError(erro);
    }
  };

  return {
    planets,
    loading,
    error,
    fetchApi,
  };
}

export default useFetch;
