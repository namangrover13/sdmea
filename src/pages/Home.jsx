import React from 'react';
import Features from '../components/HomeComponents/Features';
import Intro from '../components/HomeComponents/Intro';
import HomeHeader from '../components/HomeHeader';
import theme from '../constants/theme';

function Home() {
    return (
        <>
            <HomeHeader />
            <Intro />
            <Features />
        </>
    );
}

export default Home;