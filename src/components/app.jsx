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

    // this.search("homer thinking");
  }


  render() {
    // const gifs = [
    //   { id: "93QAXoBCMmCU8" },
    //   { id: "xT9IgDEI1iZyb2wqo8" }
    // ];

    const { selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction="homer" />
          <div className="selected-gif">
            <Gif gifId={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
