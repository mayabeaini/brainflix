import React from 'react';
import './uploadvideo.scss';

function UploadVideo({uploadHandler}) {
    return (
        <form className="upload-form" onSubmit={uploadHandler} >
            <div className="upload-form__info">
                <label className="upload-form__top" htmlFor="">video thumbail
                    <img className="upload-form__image" src="/Images/Upload-video-preview.jpg" name="image" alt="bicycle handle"/>
                </label>
                <div>
                    <label className="upload-form__top" htmlFor="">Title your video
                        <input className="upload-form__title" name="title" type="text" placeholder="Add a title to your video" />
                    </label>
                    <label className="upload-form__top" htmlFor="">Add a video description
                        <input className="upload-form__description" name="description" type="text" placeholder="Add a description of your video" />
                    </label>
                </div>
            </div>
            <div className="upload-form__order">
                <button className="upload-form__cancel" type="reset">Cancel</button>
                <button className="upload-form__publish">Publish</button>
            </div>
        </form>
    )
}

export default UploadVideo