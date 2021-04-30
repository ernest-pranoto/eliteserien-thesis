import React from 'react';
import './latest.css';
import MatchData2021 from './MatchData2021';

function Latest() {
    return (
        <div className="schedule">
            <div className="schedule-container">
                {MatchData2021.map((singleSchedule) => {
                return <ScheduleList key={singleSchedule.id} {...singleSchedule}></ScheduleList>
            })};
            </div>
        </div>
    );
};

const ScheduleList = (scList) => {
    const {date, time, home, away, homeLogo, awayLogo, homeScore, awayScore} = scList
    return (
        <div className="single-schedule" tabindex="0" aria-label={`${date} ${time} ${home} mot ${away} ${homeScore} ${awayScore}`}>
            <div className="sc-date-time">
                <p className="sc-date">{date}</p>
                <p className="sc-time">{time}</p>
            </div>
            <div className="message">
                <p>Ny Sesong Kommer</p>
            </div>
            <div className="sc-home">
                <div className="sc-home-team">
                    <img src={homeLogo} alt={`${home} logo`} className="sc-club-logo"/>
                    <p className="sc-club">{home}</p>
                </div>
                <p className="sc-score">{homeScore}</p>
            </div>
            <div className="sc-away">
                <div className="sc-away-team">
                    <img src={awayLogo} alt={`${away} logo`} className="sc-club-logo"/>
                    <p className="sc-club">{away}</p>
                </div>
                <p className="sc-score">{awayScore}</p>
            </div>
        </div>
    );
};

export default Latest;
