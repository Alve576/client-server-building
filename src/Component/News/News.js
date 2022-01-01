import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from './../../Images/1.jpg'
import img2 from './../../Images/2.jpg'
import img3 from './../../Images/3.jpg'
import img4 from './../../Images/4.jpg'

const News = () => {
    const myStyle = {
        letterSpacing: "15px",
        fontFamily: "fangsong"
       }
    return (
        <Container className='mt-5'>
            <h1 style={myStyle}>Recent <span style={{color : '#b19777'}}>News</span></h1>
            <Carousel>
                        <Carousel.Item>
                            <img
                            className="w-50 p-2"
                            src={img1}
                            alt="First slide"
                            />
                            <img
                            className="w-50 p-2"
                            src={img2}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="w-50 p-2"
                            src={img3}
                            alt="First slide"
                            />
                            <img
                            className="w-50 p-2"
                            src={img4}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        
                        
        </Carousel>
    </Container>
    );
};

export default News;