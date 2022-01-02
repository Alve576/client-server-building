import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const [data,setData] = useState({})
    const { id } = useParams()

    useEffect(()=>{
        fetch(`https://afternoon-plains-22636.herokuapp.com/buildings/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    
    return (
        <Container>
            <Row>
                <Col className='col-lg-6'>
                    <h1>{data.name}</h1>
                    <p>{data.details}</p>
                    <p>{data.details2}</p>
                </Col>
                <Col className='col-lg-6'>
                    <p>Year : {data.Year}</p>
                    <p>Company : {data.Company}</p>
                    <p>Project Name : {data.name}</p>
                    <p>Location : {data.Address}</p>
                </Col>
            </Row>

            <Row>
                <Col className='col-lg-6'>
                    <img src={data.img} className='img-fluid'/>
                </Col>
                <Col className='col-lg-6'>
                    <img src={data.img1} className='img-fluid'/>
                </Col>
                <Col className='col-lg-6'>
                    <img src={data.img2} className='img-fluid'/>
                </Col>
                <Col className='col-lg-6'>
                    <img src={data.img3} className='img-fluid'/>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col className='col-lg-4'>
                    Phone : {data.Phone} 
                </Col>
                <Col className='col-lg-4'>
                    Email : {data.Email} 
                </Col>
                <Col className='col-lg-4'>
                    Adress : {data.Address} 
                </Col>
            </Row>
        </Container>
    );
};

export default Details;