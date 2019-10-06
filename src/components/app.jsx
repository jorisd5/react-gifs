import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "93QAXoBCMmCU8" },
        { id: "xT9IgDEI1iZyb2wqo8" }
      ],
      selectedGifId: "93QAXoBCMmCU8"
    };
  }

  selectGif = (gifId) => {
    this.setState({ selectedGifId: gifId });
  }


  render() {
    const { selectedGifId } = this.state;
    const { gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction="homer" />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} stateFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
