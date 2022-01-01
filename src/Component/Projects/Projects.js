import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Project from './Project';


const Projects = () => {
    const [data,setData] = useState([]);
    const myStyle1 = {
        letterSpacing: "15px",
        fontFamily: "fangsong"
        }

    useEffect(()=>{
        fetch('https://afternoon-plains-22636.herokuapp.com/buildings')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return (
        <Container className="mt-5">
                <h1 style={myStyle1}>OUR <span style={{color : '#b19777'}}>PROJECTS</span></h1>

                <Row>
                            {data.map((project)=><Project data={project} key={project._id}/>)}
                        
                            </Row>
        </Container>
   
    );
};

export default Projects;