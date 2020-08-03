import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import YoutubeEmbedVideo from "youtube-embed-video";

const element = (
    <div>
      <h1>Hello, world!</h1>
      <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
    </div>
  );
ReactDOM.render(element, document.getElementById('app'));
// ReactDOM.render(<YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} />, document.getElementById("app"));
