import { useEffect, useState } from "react";

const useAllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch countries information.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllCountries();
  }, []);

  return {
    loading,
    error,
    countries
  };
};

export default useAllCountries;
