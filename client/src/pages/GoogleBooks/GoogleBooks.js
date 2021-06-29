import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
import useDebounce from '../../utils/debounceHook';
import API from '../../utils/API';

import './googleBooks.css';

const GoogleBooks = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const debouncedSearchTerm = useDebounce(input, 500);

  useEffect(() => {
    if (!input) {
      return;
    }
    if (debouncedSearchTerm) {
      API.googleBooks(input).then(({ data: { items } }) => {
        setResults(items);
      });
    }
  }, [debouncedSearchTerm]);

  return (
    <div className='wrapper'>
      <Container className='main-body m-5'>
        <div className='row'>
          <div className='col'>
            <Header title='Google Books Search' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Search
              input={input}
              setInput={setInput}
              setResults={setResults}
              results={results}
            />
            {console.log(results)}
          </div>
        </div>
        {results !== [] && <Results results={results} />}
      </Container>
    </div>
  );
};

export default GoogleBooks;
