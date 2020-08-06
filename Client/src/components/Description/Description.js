import React from 'react';
import time from '../timestamp/DynamicTimestamp';
import likes from '../../assets/icons/SVG/Icon-likes.svg';
import views from '../../assets/icons/SVG/Icon-views.svg';
import './description.scss';

const Description = ({description}) =>{
    return(
        <div className="description">
            <h1 className='description__title'>{description.title}</h1>
            <div className="description__details">
                <div className='description__info'>
                    <p className="description__channel">By {description.channel}</p>
                    <p className="description__date">{time(description.timestamp)}</p>
                </div>
                <div className="description__personal">
                    <img src={views} className="description__view-icon" alt="Views Icon" />
                    <p className="description__view">{description.views}</p>
                    <img src={likes} className="description__like-icon" alt="Like Icon" />
                    <p className="description__like">{description.likes}</p>
                </div>            
            </div>
            <p className="description__paragraph">{description.description}</p>
        </div>
    )
}
export default Description;