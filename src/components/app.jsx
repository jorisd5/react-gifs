import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import './components/gif';

class App extends Component {
  constructor(props) {
    super(props);

    this.state.link = "https://media0.giphy.com/media/i8gGF1Di6BXws/200.gif";
  }

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <div className="left-scene">

      <Gif src={this.state.link} />
    </div>
    <div className="right-scene">

    </div>
  );
}

}
