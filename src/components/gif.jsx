import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.gifId}/200.gif`;
    return (
      <img src={src} alt="" className={this.state.clicked ? "gif clicked" : "gif"} onClick={this.handleClick} />
    );
  }

  // const { gifId } = this.props;
  // const src = `https://media0.giphy.com/media/${gifId}/200.gif`;
  // return (
  //   <img src={src} alt="" className="gif" />
  // );
}

export default Gif;
