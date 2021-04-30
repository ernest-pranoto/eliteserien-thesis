import React from 'react'
import LatestGoalData from './LatestGoalData';
import './mostpopular.css'

function LatestGoal() {
    return (
        <div className="most-popular">
            <div className="mp-title" tabIndex="0">
                <p>nyeste mål</p>
            </div>
            <div className="mp-container">
                {LatestGoalData.map((singleList) => {
                    return <PopularList key={singleList.id} {...singleList}></PopularList>;
                })};
            </div>
            <div href="#" className="view-all">
                <p tabIndex="0">view all</p>
            </div>
        </div>
    )
};

const PopularList = (list) => {
    const {videoimg, hlogo, alogo, homegoal,awaygoal,clubscorer,scorer,date, videosource}=list;

    return (
        <>
                <a href={videosource} className="mp-single" aria-label={`lenke åpnes i ny fane mål ${clubscorer} av ${scorer}`}>
                    <img src={videoimg} alt="" className="mp-img"/>
                    <div className="mp-detail">
                        <div className="mp-goal-detail">
                            <p>Mål {clubscorer} scoring av {scorer}</p>
                        </div>
                        <div className="mp-score-date">
                            <div className="mp-score">
                                <img src={hlogo} alt="club logo" className="mp-logo"/>
                                <p className="mp-score-detail">{homegoal}-{awaygoal}</p>
                                <img src={alogo} alt="club logo" className="mp-logo"/>
                            </div>
                            <div className="mp-date">
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>
                </a>
        </>
    );
};

export default LatestGoal;
