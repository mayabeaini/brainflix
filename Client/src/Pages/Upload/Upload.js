import React from 'react'
import UploadVideo from '../../components/uploadVideo/UploadVideo.js';
import './Upload.scss'
import axios from 'axios'

// API URL
const apiUrl="http://localhost:8080"
// GET - VIDEO (RETURNS ARRAY OF VID OBJECT)
const apiVid = "/videos"

class Upload extends React.Component {
    uploadHandler = (event) => {
        event.preventDefault();
        if (event.target.title.value === "" || event.target.description.value === "") {
            return alert('Please input in all fields')
        } ;
        let maya ={
        title:event.target.title.value,
        description:event.target.description.value,
        };
            axios.post(`${apiUrl}${apiVid}`, maya)
            .then( () =>{
            this.sideVideo()
            })
            .catch(err=>console.log(err))
        event.target.reset();
    }

    cancelHandler = (event) => {
        event.preventDefault();
        let maya ={
            title:event.target.title,
            description:event.target.description,
            };
        event.target.reset(maya);
    }

    render(){
        return (
            <div className='upload'>
                <h2 className="upload__title">Upload Video</h2>
                <UploadVideo cancelHandler ={this.cancelHandler} uploadHandler={this.uploadHandler} />
            </div>
        )
    }
}

export default Upload