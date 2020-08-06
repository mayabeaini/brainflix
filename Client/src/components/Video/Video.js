import React from 'react';
import play from '../../assets/icons/SVG/Icon-play.svg';
import volume from '../../assets/icons/SVG/Icon-volume.svg';
import fullscreen from '../../assets/icons/SVG/Icon-fullscreen.svg';
import './video.scss';

const Video = ({description}) =>{
    return(
        <>
            <div className='video'>
                <video className="video__vid" src={description.video} poster={description.image} type="video/mp4"/>
            </div>
            <div className="video__controls">
                <div className="video__play">
                    <img src={play} className="video__play-icon" alt="Play Icon" />
                </div>
                <div className='video__bar'> 
                <p className='video__border'></p>
                <p className="video__time">0:00 / {description.duration}</p>
                </div>
                <div className="video__icon">
                    <img src={fullscreen} alt="Fullscreen Icon" />
                    <img src={volume} alt="Volume Icon" />
                </div>
            </div>
        </>
    )
}

export default Video