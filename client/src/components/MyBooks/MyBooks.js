import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';

const MyBooks = ({ results }) => {
  const removeBook = (book) => {
    API.deleteBook(book.google);
    window.location.reload();
  };

  return (
    <div className='row'>
      {results.map((book) => {
        console.log(book);
        return (
          <div className='col-12' key={book.google}>
            <Card className='results-card align-items-center flex-md-row align-items-md-start'>
              <Card.Img
                variant='top'
                src={book.image}
                className='results-img'
              />
              <Card.Body className='w-100'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  by{' '}
                  {book.authors.map((auth, index) => (
                    <span key={`${book.google}-auth-${index}`}>
                      {book.authors.length > 1 ? `|${auth}|` : auth}
                    </span>
                  ))}
                </Card.Text>
                <hr />
                <div className='d-flex align-items-center results-links'>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className='heart fa-lg'
                    style={{ color: 'var(--heart)' }}
                    onClick={() => removeBook(book)}
                  />
                  <a href={book.link} target='_blank' rel='noopener noreferrer'>
                    More Info
                  </a>
                </div>
                <Card.Text className='mt-3'>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default MyBooks;
