// Updata dependencies

import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className={this.state.clicked ? "selected-gif" : "gif"}
        onClick={this.handleClick}>
        <img src={this.props.link} />
      </div>
    );
  }
}

export default Gif;
