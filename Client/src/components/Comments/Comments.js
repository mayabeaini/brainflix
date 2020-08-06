import React from 'react';
import time from '../timestamp/DynamicTimestamp';
import './comments.scss';

const Comments = ({description}) => {
    
    return(
        <div>
            {description.comments.map(item => {
                return(
                    <div key={item.id} className="comments__container">
                        <img className="comments__icon" src={description.icon} alt="username" />
                        <div className="comments__area">
                            <div className="comments__boxing">
                                <p className="comments__area-name">{item.name}</p>
                                <p className="comments__area-date">{time(item.timestamp)}</p>
                            </div>
                            <p className="comments__area-paragraph">{item.comment} </p>
                        </div>
                    </div>
                )
            }).reverse()}
        </div>
    )
}

export default Comments