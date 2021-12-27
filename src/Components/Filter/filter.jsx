import React from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import Rating from '../Rating/rating';
import  './filter.css';

function filter() {
    return (
        <div>
          <div className="btn-group">
    <Rating/>
    </div>
             <Form className="d-flex">
    <FormControl
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    
    <Button variant="warning">Search</Button>
    
    
  </Form>
        </div>
    )
}

export default filter
