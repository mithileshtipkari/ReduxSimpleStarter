import React, { Component } from 'react';
class SearchBar extends Component{
    constructor(props){
      super(props);

      this.state = {sTerm : ''};
    }

    render(){
      return (
        <div>
          <input
            value={this.state.sTerm}
            onChange={event => this.setState({sTerm : event.target.value})}
          />
        </div>
      );
    }

    onInputChange(event){
      this.setState({ sTerm : event.target.value});
    }
}

export default SearchBar;
