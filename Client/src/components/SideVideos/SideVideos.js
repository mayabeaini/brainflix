import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './sidevideos.scss';

const SideVideos = (props) => {
    return ( 
        <>
        {props.description.data.map(item => {
            if (item.id.toString() !== props.description.id){
                return (
                    <Link key={item.id} to={`/video/${item.id}`} style={{textDecoration:'none'}}>
                        <div className="nextvideo__boxing">
                            <img src={item.image} className='nextvideo__image' alt="Video preview" />
                            <div className="nextvideo__info">
                                <h4 className="nextvideo__description">{item.title}</h4>
                                <p className="nextvideo__channel">{item.channel}</p>
                            </div>
                        </div>
                    </Link>
                )
            }
        })}
        </>
    )
}

export default withRouter(SideVideos);