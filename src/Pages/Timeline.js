import React from 'react'
import './timeline.css';
import TimelineData from './TimelineData';
import { GrCirclePlay } from 'react-icons/gr';

function Timeline() {
    return (
        <div className="main-timeline">
            {TimelineData.map ((singleTimeline) => {
                return <TimelineList key={singleTimeline.id} {...singleTimeline}></TimelineList>;
            })};
        </div>
    );
};

const TimelineList = (event) => {
    const {position, team, clublogo, time, player, action, actionicon, videosource} = event;

    let homeAway = `timeline-${position}`;
    console.log (homeAway);
    let actionIcon = `${actionicon}`;
    let eventname = 'event-name';

    if (position === 'home' && action === 'mål') {
        homeAway = 'home-goal'
        actionIcon = '/actionicons/goal.png';
    }

    if (position === 'away' && action === 'mål') {
        homeAway = 'away-goal'
        actionIcon = '/actionicons/goal.png';
    }

    if (action === 'gult kort') {
        actionIcon = '/actionicons/yellow.png';
    }

    if (position === 'away') {
        return (
            <div className='timeline'>
                <div className={homeAway}>
                    <a href={videosource} target="_blank" aria-label={`lenke åpnes i ny fane ${team} ${action} av ${player} på ${time} minutter`}>
                        <div className="center-line"></div>
                        <p className="timeline-time">{time}'</p>
                        <div className="action">
                            <img src={actionIcon} alt="player icon"/>
                        </div>
                        <div className="timeline-content">
                            <p className={eventname}>{action}</p>
                            <p className="event-player-name">{player}</p>
                        </div>
                        <img src={clublogo} className="timeline-club-logo" alt={`${clublogo} logo`}/>
                        <GrCirclePlay className="far"/>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className='timeline'>
            <div className={homeAway}>
                <a href={videosource} target="_blank"  aria-label={`lenke åpnes i ny fane ${team} ${action} av ${player} ${time} minutter`}>
                    <div className="center-line"></div>
                    <p className="timeline-time">{time}'</p>
                    <GrCirclePlay className="far"/>
                    <img src={clublogo} class="timeline-club-logo" alt={`${clublogo} logo`}/>
                    <div className="timeline-content">
                        <p className={eventname}>{action}</p>
                        <p className="event-player-name">{player}</p>
                    </div>
                    <div className="action">
                        <img src={actionIcon} alt="player icon"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Timeline;
