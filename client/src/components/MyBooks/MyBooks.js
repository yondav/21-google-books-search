import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import API from '../../utils/API';

const MyBooks = ({ results }) => {
  return (
    <div className='row'>
      {console.log(results)}
      {results.map((book) => {
        return <div className='col-12'></div>;
      })}
      {/* {results.map((book) => {
        return (
          <div className='col-12' key={book.id}>
            <Card className='results-card align-items-center flex-md-row align-items-md-start'>
              <Card.Img
                variant='top'
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : 'https://dummyimage.com/287.98X479.22/222222/fff&text=photo+unavailable'
                }
                className='results-img'
              />
              <Card.Body className='w-100'>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Text>
                  by{' '}
                  {book.volumeInfo.authors.map((auth, index) => (
                    <span key={`${book.id}-auth-${index}`}>
                      {book.volumeInfo.authors.length > 1 ? `|${auth}|` : auth}
                    </span>
                  ))}
                </Card.Text>
                <hr />
                <div className='d-flex align-items-baseline results-links'>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className='heart'
                    style={{ color: 'var(--heart)' }}
                    // onClick={() => handleRemove(book)}
                  />
                  <a
                    href={book.selfLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    More Info
                  </a>
                </div>
                <Card.Text>{book.volumeInfo.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })} */}
    </div>
  );
};

export default MyBooks;
