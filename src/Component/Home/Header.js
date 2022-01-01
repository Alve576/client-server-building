import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImg from './../../Images/header-bg.jpg'
import Sidebar from './Sidebar';

const Header = () => {

   const myStyle = {
    letterSpacing: "15px",
    fontFamily: "fangsong"
   }
   
    return (
        <Container style={{height : "100vh"}}>
            <Container>
                <Row className='d-flex align-items-center' style={{height : "80vh"}}>
                    <Col className='col-lg-6'>
                        <img src={bgImg} className='img-fluid'/>
                    </Col>
                    <Col className='col-lg-6'>
                        <h1 style={myStyle} >INNOVATE DESIGN IN BD</h1>
                        <p>Architecture viverra tellus nec massa dictum the euismoe.
                                        </p>
                                        <button type="button" className="btn btn-outline-dark">Buy Now</button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Header;