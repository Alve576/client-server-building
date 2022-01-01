import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ContectUs = () => {
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
                           <h1 style={myStyle1}>CONTECT <span style={{color : '#b19777'}}>US</span></h1>

        <Row>
            <Col className='col-lg-4'>
                <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                        <Card.Body className='text-white'>
                            <Card.Title style={myStyle}>Architecture</Card.Title>
                            <Card.Text>
                            Phone : +1 203-123-0606

                            Email : architecture@bauen.com

                            Address : 24 King St, Charleston, 29401 USA


                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4'>
                <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
                        <Card.Body className='text-white'>
                            <Card.Title style={myStyle}>Interior Design</Card.Title>
                            <Card.Text>
                            Our firm nisl sodales sit amet sapien idea placerat sodales orcite. Vivamus ne miss rhoncus felis bauen architecture.
                            </Card.Text>
                            <Card.Text>VAT : USA002323065B06</Card.Text>
                        </Card.Body>
                </Card>
            </Col>
            <Col className='col-lg-4'>
                <Card className='bg-dark text-white' className='d-flex bg-dark align-items-center'>
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

export default ContectUs;