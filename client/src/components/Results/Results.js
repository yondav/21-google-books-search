import React from 'react';
import Card from 'react-bootstrap/Card';

const Results = ({ results }) => {
  return (
    <div className='row'>
      {results.map((book) => {
        return (
          <div className='col-12 col-md-6 col-lg-4' key={book.id}>
            <Card>
              <Card.Img
                variant='top'
                src={book.volumeInfo.imageLinks.thumbnail}
              />
              <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
