import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import MyBooks from '../../components/MyBooks/MyBooks';
import API from '../../utils/API';

const SavedBooks = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.savedBooks().then(({ data }) => {
      setSavedBooks(data);
    });
  }, []);

  return (
    <div className='wrapper'>
      <Container className='main-body m-5'>
        <div className='row'>
          <div className='col'>
            <Header title='Saved Books' />
          </div>
        </div>
      </Container>
      {savedBooks !== [] && <MyBooks results={savedBooks} />}
    </div>
  );
};

export default SavedBooks;
