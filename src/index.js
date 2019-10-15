import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ok from './components/video_details';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyATa1WV3At4zP1Br0E5Ce81B-MZ1MFeuO0';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos : [] };

    YTSearch({key : API_KEY, term : 'maroon5'}, (videos) => {
      this.setState({ videos }); // this.setState({ videos : videos});
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
