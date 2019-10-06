import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const stateFunction = this.props;
    if (stateFunction) {
      const gifId = this.props;
      stateFunction(gifId);
    }
  }

  render() {
    const gifId = this.props;
    const src = `https://media0.giphy.com/media/${gifId}/200.gif`;
    return (
      <img src={src} alt="" onClick={this.handleClick} onKeyDown={this.handleClick} />
    );
  }

  // const { gifId } = this.props;
  // const src = `https://media0.giphy.com/media/${gifId}/200.gif`;
  // return (
  //   <img src={src} alt="" className="gif" />
  // );
}

export default Gif;
