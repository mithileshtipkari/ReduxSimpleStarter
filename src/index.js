import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import ok from './components/video_details';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
