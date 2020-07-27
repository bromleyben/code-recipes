import React, {
    useState,
    useEffect,
    useReducer,
  } from 'react';

  import axios from 'axios';

  const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
   
    useEffect(() => {
        setIsError(false);
        setIsLoading(true);

        axios(url)
        .then(result => setData(result.data))
        .catch(error => setIsError(true))
        .finally(() => setIsLoading(false));
    }, [url]);
   
    return [{ data, isLoading, isError }, setUrl];
  };

  export default useDataApi; 