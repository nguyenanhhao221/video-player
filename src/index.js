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
    // in order to change state we need a function that call setState
    this.chooseVideo = 

    this.state = { src: VIDEOS.fast };
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu />
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