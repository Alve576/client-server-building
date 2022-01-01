import React from 'react';
import News from '../News/News';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import About from './About/About';
import ContectUs from './ContectUs/ContectUs';
import Header from './Header';
import Testominal from './Testominal/Testominal';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <News></News>
            <ContectUs></ContectUs>
        </div>
    );
};

export default Home;