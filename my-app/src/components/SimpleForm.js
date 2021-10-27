import React, {Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Row, Form, Col, Container,Card} from 'react-bootstrap';
import './SimpleForm.css'
import Select from 'react-select'

const skills = [
    { value: '1', label: 'Python' },
    { value: '2', label: 'Machine Learning' },
    { value: '3', label: 'R' },
  ];

class SimpleForm extends Component {
    state = {
        selectedOption: null,
      };
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };     
    render(){
    const { selectedOption } = this.state;

       return(
       <Container>
          
    <Card className = 'card'>
    <div>
           <h1 className = 'heading'><center>Profile Details</center></h1>
           </div>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="Enter First Name" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="last name" placeholder="Enter Last Name" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="name" placeholder="Enter your e-mail" />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="last name" placeholder="Enter your password" />
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Internship</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>Data Science</option>
          <option>Web Development</option>
        </Form.Select>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Skills</Form.Label>
      <Select
        className = "select"
        multiple = {true}
        value={selectedOption}
        onChange={this.handleChange}
        options={skills}
      />
    </Form.Group>
  
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>
    
    <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Upload your resume</Form.Label>
    <Form.Control type="file" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Preference</Form.Label>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="In-office"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="Work From Home"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            </div>
            ))}
            </Form.Group>
    <Button variant="primary" type="submit" size = 'xxl'>
      Submit
    </Button>
  </Form>
  </Card>
  </Container>
   )    
}
}

export default SimpleForm;