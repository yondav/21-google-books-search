import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import API from '../../utils/API';
import './search.css';

const Search = ({ input, setInput, setResults }) => {
  const [err, setErr] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let search = document.querySelector('.search-input').value.trim();
    if (search === '') {
      setErr('err');
      setTimeout(() => {
        setErr('');
      }, 2000);
    } else {
      setInput(search);
      API.googleBooks(input).then(({ data: { items } }) => setResults(items));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='demo_date'>
          <Form.Label>
            <h2 className='search-title'>Search Books</h2>
          </Form.Label>
          <div className='d-flex'>
            <Form.Control
              className='search-input'
              type='text'
              name='search'
              onChange={handleChange}
            />
            <Button variant='outline' className='btn' type='submit'>
              Search
            </Button>{' '}
          </div>
          {err === 'err' && (
            <Alert variant='danger'>Oops! You gotta give me something!</Alert>
          )}
        </Form.Group>
      </Form>
    </>
  );
};

export default Search;
