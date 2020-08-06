import React from 'react';
import SideVideos from '../SideVideos/SideVideos';
import './nextvideo.scss';

const NextVideo = (props) => {
    return (
        <div className="nextvideo">
            <h4 className="nextvideo__title">Next video</h4>
            <SideVideos vid = {props.vid} description={props.description} />
        </div>
    )
}

export default NextVideo;