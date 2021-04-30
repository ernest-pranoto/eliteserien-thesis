import React from 'react';
import Latest from './Latest';
import LatestClip from './LatestClip';
import MostPopular from './MostPopular';
import LatestGoal from './LatestGoal';
import LatestCard from './LatestCard';

function Home() {
    return (
        <>
            <Latest/>
            <LatestClip/>
            <MostPopular/>
            <LatestGoal/>
            <LatestCard/>
        </>
    )
}

export default Home
