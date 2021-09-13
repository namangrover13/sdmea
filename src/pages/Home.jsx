import React from 'react';
import Features from '../components/HomeComponents/Features';
import Intro from '../components/HomeComponents/Intro';
import HomeHeader from '../components/HomeComponents/HomeHeader';

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