import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './components/Video.js';
import { Menu } from './components/Menu.js';

const VIDEOS = {
  fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this); // Bind chooseVideo because it use "this.setState" so need to make sure the "this" is refer to correct instance
    this.state = { src: VIDEOS.fast };
  }
   // in order to change state we need a function that call setState
   // newVideo will be passed in the string "fast" , "slow", "cute", "eek" which we will later be selected in Menu component
   // Base on the value of the string passed in we will update the video src
   chooseVideo(newVideo) {
    this.setState(
        { src: VIDEOS[newVideo] }
    );
   }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        {/*pass in prop name src with value of App's state, src value */}
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);