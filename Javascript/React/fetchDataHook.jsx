import React, {
    useState,
    useEffect,
    useReducer,
  } from 'react';

  import axios from 'axios';

  // Reducer, takes current state and action
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
          return {
            ...state,
            isLoading: true,
            isError: false
          };
        case 'FETCH_SUCCESS':
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload,
          };
        case 'FETCH_FAILURE':
          return {
            ...state,
            isLoading: false,
            isError: true,
          };
        default:
          throw new Error();
      }
  };
  
  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
      });

   
    useEffect(() => {
        dispatch({ type: 'FETCH_INIT' });

        axios(url)
        .then(result => dispatch({ type: 'FETCH_SUCCESS', payload: result.data }))
        .catch(error => dispatch({ type: 'FETCH_FAILURE' }));

    }, [url]);
   
    return [state, setUrl];
  };

  export default useDataApi;