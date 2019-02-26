import React from 'react';
import MusicSelector from '../components/MusicSelector.js';
import MusicDetail from '../components/MusicDetail.js';
import Request from '../helpers/request.js'

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };

    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  //changes the currentSong property to the selected song

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    console.log('url', url);
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data.feed.entry}));
  }

  handleSongSelected(index){
    const selectedSong = this.state.songs[index];
    this.setState({currentSong: selectedSong})
    console.log('selectedSong', selectedSong);
  }


  render(){
    return(
      <div>
      <h2>Music Container</h2>
      <MusicSelector songs={this.state.songs} onSongSelected={this.handleSongSelected}/>
      <MusicDetail songs={this.state.currentSong}/>
      </div>
    )
  }
}

export default MusicContainer;
