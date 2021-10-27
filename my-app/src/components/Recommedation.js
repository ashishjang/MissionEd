import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Row, Col, Container,Card} from 'react-bootstrap';
import './Recommendation.css'
import Image from 'react-bootstrap/Image'

class Recommendation extends Component {   
    render(){
       return(
         <Container className="container">
          <div>
          <h1 className = 'heading-1'>Recommendations</h1>
           </div>
          <Card className = "list-element">
          <Row>
            <Col className = 'columns'>
            Data Science Internship
            </Col>
            <Col className = 'columns'>
              <Image src= "./logo.svg" roundedCircle />
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
}

export default Recommendation;