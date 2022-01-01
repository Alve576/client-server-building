import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import icon1 from './../../Images/icon-1.png'
import icon2 from './../../Images/icon-2.png'
import icon3 from './../../Images/icon-3.png'
const Services = () => {


    const myStyle = { 
        
                fontSize: '16px',
            fontWeight: '300',
            marginBottom: '15px',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '5px',
    }

    const myStyle1 = {
        letterSpacing: "15px",
        fontFamily: "fangsong"
       }
   
    return (
        <Container className="mt-5">
                           <h1 style={myStyle1}>OUR <span style={{color : '#b19777'}}>SETVICES</span></h1>

            <Row>
                <Col className='col-lg-4'>
                    <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                            <Card.Img variant="top" className='w-25 p-3' src={icon1} />
                            <Card.Body className='text-white'>
                                <Card.Title style={myStyle}>Architecture</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-4'>
                    <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                            <Card.Img variant="top" className='w-25 p-3' src={icon2} />
                            <Card.Body className='text-white'>
                                <Card.Title style={myStyle}>Interior Design</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col className='col-lg-4'>
                    <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                            <Card.Img variant="top" className='w-25 p-3' src={icon3} />
                            <Card.Body className='text-white'>
                                <Card.Title style={myStyle}>Urban Design</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;