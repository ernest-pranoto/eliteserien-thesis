import React from 'react';
import './result.css';
import resultdata from './resultdata';
import Timeline from './Timeline';
import { MdDateRange } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';


function Result() {
  return (
    <>
      <div className="result-main">
        <div className="background">
          <img src="./aspmyra2.jpg" alt="bilde av stadion"/>
        </div>
        {resultdata.map((mainResult) => {
          return <SingleResult key={mainResult.id} {...mainResult}></SingleResult>;
        })};
      </div>
      <Timeline/>
    </>
    
  );
};

const SingleResult = (result) => {
  const {id,home,homelogo,homegoal,homescorer1,homescorer2,homescorer3,away,awaylogo,awaygoal,halftime,stadium,date,time} = result;
  
  return (
    <div className="result" key={id}>
      <div className="date-place">
        <p>{stadium}</p>
        <MdDateRange className="date-time-icon-result"/>
        <p>{date}</p>
        <MdAccessTime className="date-time-icon-result"/>
        <p>{time}</p>
      </div>
      <div className="transparent"></div>
      <div className="scoreboard-result">
        <div className="home-result">
          <img src={homelogo} alt={`${home} logo`} className="club-logo"/>
          <p>{home}</p>
        </div>
        <div className="score">{homegoal} - {awaygoal}</div>
        <div className="away-result">
          <div className="away-result-plus">
            <p>{away}</p>
            <img src={awaylogo} alt={`${away} logo`} className="club-logo" />
          </div>
        </div>
      </div>
      <div className="scorer">
        <div className="home-scorer">
          <p>{homescorer1}</p>
          <p>{homescorer2}</p>
          <p>{homescorer3}</p>
        </div>
        <div className="half-time">(HT: {halftime})</div>
        <div className="away-scorer"></div>
      </div>
    </div>
  );
};

export default Result;