import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
import './googleBooks.css';

const GoogleBooks = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  return (
    <Container className='main-body m-5'>
      <div className='row'>
        <div className='col'>
          <Header title='Google Books Search' />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Search input={input} setInput={setInput} setResults={setResults} />
          {console.log(results)}
        </div>
      </div>
      <Results results={results} />
    </Container>
  );
};

export default GoogleBooks;
