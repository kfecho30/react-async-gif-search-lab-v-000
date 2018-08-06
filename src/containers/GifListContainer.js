import React, {Component} from 'react';

export default class GifListContainer extends Component{
  constructor(){
    super();
    this.state={
      gifs: []
    }
  }

  render(){
    return(
      <div>
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
