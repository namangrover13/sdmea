import React from 'react';
import Intro from '../components/HomeComponents/Intro';
import HomeHeader from '../components/HomeHeader';
import theme from '../constants/theme';

function Home() {
    return (
        <>
            <HomeHeader />
            <Intro />
        </>
    );
}

export default Home;