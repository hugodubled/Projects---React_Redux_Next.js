import {useEffect, useState}  from 'react';

export function useFetch(fetchFn, initialValue){
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchData, setFetchData] = useState(initialValue);

    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, [fetchFn]);
      
      return {
        isFetching,
        error,
        fetchData,
        setFetchData
      }
}