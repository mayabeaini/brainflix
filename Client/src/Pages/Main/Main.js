import React from 'react'
import axios from 'axios';
import Video from '../../components/Video/Video'
import Description from '../../components/Description/Description'
import CommentForm from '../../components/CommentForm/CommentForm'
import Comments from '../../components/Comments/Comments'
import NextVideo from '../../components/NextVideo/NextVideo'
import './Main.scss'

// API URL
const apiUrl="http://localhost:8080"
// GET - VIDEO (RETURNS ARRAY OF VID OBJECT)
const apiVid = "/videos"
// API POST
const apiPost="/comments"

class Main extends React.Component {
  state ={
    comments:[],
    id:'',
    data: [],
    icon:'/Images/Mohan-muruge.jpg',
    video: '',
  }

  mainVideo =(id) =>{
    if (id === undefined){
      axios.get(`${apiUrl}${apiVid}/1af0jruup5gu`)
      .then (res=>{
        this.setState({
          title: res.data.title,
          image: res.data.image,
          channel: res.data.channel,
          timestamp: res.data.timestamp,
          duration: res.data.duration,
          description: res.data.description,
          views: res.data.views,
          likes: res.data.likes,
          comments: res.data.comments,
          id:res.data.id,
          video: res.data.video+'?api_key=<700797a8-6728-491e-992f-acbaafc9d4c3>',
        })
      })
      .catch(err=>console.log(err))
    } else {
      axios.get(`${apiUrl}${apiVid}/`+id)
      .then (res=>{
        this.setState({
          title: res.data.title,
          image: res.data.image,
          channel: res.data.channel,
          timestamp: res.data.timestamp,
          duration: res.data.duration,
          description: res.data.description,
          views: res.data.views,
          likes: res.data.likes,
          comments: res.data.comments,
          id:res.data.id,
          video: res.data.video+'?api_key=<700797a8-6728-491e-992f-acbaafc9d4c3>',
        })
      })
      .catch(err=>console.log(err))
    }
  }

  sideVideo = () =>{
    axios
      .get(`${apiUrl}${apiVid}`)
      .then(res=>{
        this.setState({
          data: res.data,
        })
      })
      .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.mainVideo(this.props.match.params.id);
    this.sideVideo()
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id){
      this.mainVideo(this.props.match.params.id)
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    if (event.target.default.value === "") {
      return alert('Please input in all fields')
    } ;
    let maya ={
    comment:event.target.default.value,
    name:'BrainStation Woman',
    };
    if (this.props.match.params.id === undefined){
      axios.post(`${apiUrl}${apiVid}/1af0jruup5gu${apiPost}`, maya)
      .then( () =>{
        this.mainVideo('1af0jruup5gu')
      })
      .catch(err=>console.log(err))
    } else {
      axios.post(`${apiUrl}${apiVid}/`+this.props.match.params.id+`${apiPost}`, maya)
      .then( () =>{
        this.mainVideo(this.props.match.params.id)
      })
      .catch(err=>console.log(err))
    }
    event.target.reset();
  }

  render(){
    return (
      <div>
        <Video description={this.state} />
        <div className='general'>
          <div className="general__info">
            <Description description={this.state} />
            <CommentForm submitHandler={this.submitHandler} description={this.state} />
            <Comments description={this.state} />
          </div>
          <NextVideo description={this.state} />
        </div>
      </div>
    )
  }
}

export default Main