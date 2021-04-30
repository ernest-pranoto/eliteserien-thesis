import React, { useState, useEffect } from 'react'
import LatestClipData from './LatestClipData';
import './latestclip.css';
import {BiLeftArrow} from 'react-icons/bi';
import {BiRightArrow} from 'react-icons/bi';

function LatestClip() {
    const [clip, setClip] = useState (LatestClipData);
    const [index, setIndex] = useState (0);

    useEffect(()=>{
        const lastIndex = LatestClipData.length -1
        if (index < 0) {
            setIndex (lastIndex);
        }
        if (index > lastIndex) {
            setIndex (0);
        }
    },[index, LatestClipData])

    useEffect (()=>{
        let slider = setInterval (()=> {
            setIndex (index + 1);
        },5000);
        return () => clearInterval (slider);
    },[index])

    return (
        <div className="latest-clip">
        {LatestClipData.map((singleClip, singleClipIndex) => {
            const {id, videoimg, homelogo, awaylogo, homegoal, awaygoal, clubscorer, scorer, videosource} = singleClip;

        let position = 'nextSlide'
        let tabIndex = "-1"

        if (singleClipIndex === index){
            position = 'activeSlide';
        }

        if (singleClipIndex === index - 1 ||( index === 0 &&singleClipIndex === LatestClipData.length)) {
            position = 'lastSlide';
        }

        if (position === 'activeSlide') {
            tabIndex = "0"
        }

            return (
                <article className={position} key={id}>
                    <div className="single-clip">
                        <div className="clip-bg">
                            <div className="black-box"></div>
                            <div className="clip-image">
                            <img src={videoimg} alt={`bilde av ${clubscorer} spillerer`} className="clip-img"/>
                            </div>
                        </div>
                        <div className="clip-info">
                            <div className="ci-info">
                                <div className="ci-result">
                                    <img src={homelogo} alt="club logo" className="ci-logo"/>
                                    <p className="ci-score">{homegoal} - {awaygoal}</p>
                                    <img src={awaylogo} alt="club logo" className="ci-logo"/>
                                </div>
                                <div className="ci-scorer-detail">
                                    <p className="ci-detail">Mål {clubscorer} scoring av</p>
                                    <p className="ci-detail">{scorer}</p>
                                </div>
                                <div className="buttons">
                                    <div className="watch-btn">
                                        <a href={videosource} target="_blank" className="clip-button" tabIndex={tabIndex} aria-label={`lenke åpnes i ny fane mål ${clubscorer} av ${scorer} vis klip`}>vis klip</a>
                                    </div>
                                    <div className="btn-container">
                                        <button className="prev" onClick= {()=> setIndex (index-1)} tabIndex={tabIndex}><BiLeftArrow/>prev</button>
                                        <button className="next" onClick= {()=> setIndex (index+1)} tabIndex={tabIndex}>next<BiRightArrow/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            );
        })}
        </div>
    );
};

export default LatestClip;
