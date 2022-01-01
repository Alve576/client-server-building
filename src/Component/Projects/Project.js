import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = ({data}) => {
    const myStyle = { 
        
        fontSize: '16px',
    fontWeight: '300',
    marginBottom: '15px',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: '5px',
}


    return (
        
                <Col className='col-lg-4'>
                    <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                            <Card.Img variant="top" className='w-100' src={data.img} />
                            <Card.Body className='text-white'>
                                <Card.Title style={myStyle} className='d-flex justify-content-center align-items-end'><Link to={`/details/${data._id}`} className='position-absolute'><Button variant="outline-light" style={{width : '300px'}}>Details</Button></Link></Card.Title>
                                
                            </Card.Body>
                    </Card>
                </Col>
           
    );
};

export default Project;