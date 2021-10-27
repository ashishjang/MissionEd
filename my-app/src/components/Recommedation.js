import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Row, Col, Container,Card} from 'react-bootstrap';
import './Recommendation.css'
import Image from 'react-bootstrap/Image'
import { extend } from 'jquery';

const EachItem = () => {   
       return (
      <Container>
        <div>
      <h1 className = 'heading-1'>Recommendations</h1>
       </div>
        <Card className = "list-element">
        <Row>
          <Col className = 'columns'>
          <text className = 'label'>Data Science Internship</text>
          </Col>
          <Col className = 'columns'>
            <Image src = 'abc/png' roundedCircle />
              </Col>
              <Col className = 'columns'>
            MissionEd
            </Col>
          <Col className = 'columns'>
            6 Likes
            </Col>
            <Col className = 'columns'>
            2 weeks
            </Col>
            <Col className = 'columns'>
          <Button variant="primary">View Details</Button>
            </Col>
        </Row>
      </Card>
      </Container>
       )
}

class Recommendation extends Component {   
  render(){
     return(
       EachItem() 
     )
}
}

export default Recommendation;