import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '../Rating/rating';

function movieCard({movie}) {
    return (
        <div className="movie-card">
<Card style={{ width: '18rem',backgroundColor: 'black' ,color: 'white' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.type}
    </Card.Text>
    <Card.Text>
      <Rating rate={movie.rating}/>
    </Card.Text>
    <Card.Text>
      {movie.description}
    </Card.Text>
    
  </Card.Body>
</Card>
            
        </div>
    )
}

export default movieCard
