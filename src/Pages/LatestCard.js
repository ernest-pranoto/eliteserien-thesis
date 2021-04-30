import React from 'react'
import LatestCardData from './LatestCardData';
import './mostpopular.css'

function MostPopular() {
    return (
        <div className="most-popular">
            <div className="mp-title" tabIndex="0">
                <p>nyeste kort</p>
            </div>
            <div className="mp-container">
                {LatestCardData.map((singleList) => {
                    return <CardList key={singleList.id} {...singleList}></CardList>;
                })};
            </div>
            <div href="#" className="view-all">
                <p tabIndex="0">view all</p>
            </div>
        </div>
    )
};

const CardList = (list) => {
    const {videoimg, hlogo, alogo, homegoal,awaygoal,clubcard,player,date, videosource}=list;

    return (
        <>
                <a href={videosource} className="mp-single" aria-label={`lenke åpnes i ny fane mål ${clubcard} av ${player}`}>
                    <img src={videoimg} alt="" className="mp-img"/>
                    <div className="mp-detail">
                        <div className="mp-goal-detail">
                            <p>Gult kort {clubcard} {player}</p>
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

export default MostPopular;
