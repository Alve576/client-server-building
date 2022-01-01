import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bgImg from './../../../Images/about.jpg'

const About = () => {
    const myStyle = {
        letterSpacing: "15px",
        fontFamily: "fangsong"
       }
       
    return (
        <Container style={{height : "100vh"}}>
        <Container>
            <Row className='d-flex align-items-center' style={{height : "80vh"}}>
               
                <Col className='col-lg-6'>
                    <h1 style={myStyle} >ABOUT US </h1>
                    <p>Architecture viverra tristique justo duis vitae diam neque nivamus aestan ateuene artines aringianu atelit finibus viverra nec lacus. Nedana theme erodino setlie suscipe no curabit tristique.</p>
                    <p>Design inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen.</p>
                    <p>Planner inilla duiman at elit finibus viverra nec a lacus themo the drudea seneoice misuscipit non sagie the fermen. Viverra tristique jusio the ivite dianne onen nivami acsestion augue artine.</p>
                </Col>
                <Col className='col-lg-6'>
                    <img src={bgImg} className='img-fluid'/>
                </Col>
            </Row>
        </Container>
    </Container>
    );
};

export default About;