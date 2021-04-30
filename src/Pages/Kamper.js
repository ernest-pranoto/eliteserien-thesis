import React from 'react';
import './kamper.css';
import MatchData from './MatchData';
import { Link } from "react-router-dom";
import { HiOutlineArrowRight} from "react-icons/hi";
import { MdDateRange } from "react-icons/md";

function Kamper() {
    return (
        <div className="kamper-container">
            <div className="season">
            <p>sesong :</p>
            <div>
                    <div className="calendar" tabIndex="0">
                        <MdDateRange className="calendar-icon"/>
                        <p>2020</p>
                    </div>
                </div>
            </div>
            <div className="round" tabIndex="0">Runde 30</div>
            {MatchData.map((singleMatch) => {
                return <MatchList key={singleMatch.id} {...singleMatch}></MatchList>;
            })};
        </div>
    );
};

const MatchList = (list) => {
    const {date, time, home, away, homeLogo, awayLogo, homeScore, awayScore, stadium} = list;
    return (
        <div className="container">
        <Link to="/result" aria-label={`${date} klokka ${time} ${home} ${homeScore} mot ${away} ${awayScore} på ${stadium}`}>
            <div className="single-match">
                <div className="date-time">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="scoreboard">
                    <div className="home-team">
                        <div className="hometeam">
                            <div>{home}</div>
                            <img src={homeLogo} alt={`${home} logo`} className="team-logo"/>
                        </div>
                    </div>
                    <div className="final-score">{homeScore} - {awayScore}</div>
                    <div className="away-team">
                        <img src={awayLogo} alt={`${away} logo`} className="team-logo"/>
                        <div>{away}</div>
                    </div>
                </div>
                <div className="stadium-name">
                    <p>{stadium}</p>
                </div>
                <div className="arrow"><HiOutlineArrowRight/></div>
            </div>
        </Link>
    </div>
    );
};

export default Kamper;